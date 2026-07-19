from langchain_chroma import Chroma
from services.embedding_service import embedding_service


class ChromaService:

    def __init__(self):

        self.vector_store = Chroma(
            collection_name="startup_articles",
            persist_directory="./chroma_db",
            embedding_function=embedding_service.embedding_model,
        )

    def add_documents(self, documents):

        self.vector_store.add_documents(documents)

    def similarity_search(
        self,
        query: str,
        k: int = 5
    ):

        return self.vector_store.similarity_search(
            query,
            k=k
        )

    def reset_collection(self):
        """
        Delete old collection and recreate it.
        """

        self.vector_store.delete_collection()

        self.vector_store = Chroma(
            collection_name="startup_articles",
            persist_directory="./chroma_db",
            embedding_function=embedding_service.embedding_model,
        )


chroma_service = ChromaService()