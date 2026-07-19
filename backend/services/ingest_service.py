from pathlib import Path

from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter

from langchain_community.document_loaders import (
    PyPDFLoader,
    TextLoader,
)

from database import SessionLocal
from models import Article

from services.chroma_service import chroma_service



class IngestService:


    # =====================================
    # Article Database -> ChromaDB
    # =====================================

    def ingest_articles(self):

        db = SessionLocal()

        try:

            # Clear old vectors
            chroma_service.reset_collection()


            articles = db.query(Article).all()


            splitter = RecursiveCharacterTextSplitter(

                chunk_size=500,

                chunk_overlap=100

            )


            documents = []



            for article in articles:


                chunks = splitter.split_text(
                    article.content
                )


                for chunk in chunks:


                    documents.append(

                        Document(

                            page_content=chunk,


                            metadata={

                                "id": article.id,

                                "title": article.title,

                                "category": article.category,

                                "slug": article.slug,

                                "source": "article"

                            }

                        )

                    )



            chroma_service.add_documents(
                documents
            )


            return len(documents)



        finally:

            db.close()





    # =====================================
    # Uploaded File -> ChromaDB
    # =====================================

    def ingest_file(
        self,
        file_path: str
    ):


        path = Path(file_path)



        # PDF

        if path.suffix.lower() == ".pdf":


            loader = PyPDFLoader(
                file_path
            )


        # TXT

        elif path.suffix.lower() == ".txt":


            loader = TextLoader(

                file_path,

                encoding="utf-8"

            )


        else:


            raise Exception(
                "Only PDF and TXT files supported"
            )



        documents = loader.load()



        splitter = RecursiveCharacterTextSplitter(

            chunk_size=500,

            chunk_overlap=100

        )



        chunks = splitter.split_documents(
            documents
        )



        for chunk in chunks:


            chunk.metadata.update({

                "source": path.name,

                "type": "uploaded_file"

            })



        chroma_service.add_documents(
            chunks
        )



        return len(chunks)





ingest_service = IngestService()