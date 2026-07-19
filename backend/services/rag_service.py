from services.chroma_service import chroma_service



class RAGService:


    def retrieve_context(
        self,
        question: str,
        k: int = 5
    ) -> str:


        documents = chroma_service.similarity_search(

            query=question,

            k=k

        )



        if not documents:

            return ""



        context = ""



        for doc in documents:


            metadata = doc.metadata



            title = metadata.get(
                "title"
            )


            category = metadata.get(
                "category"
            )


            source = metadata.get(
                "source"
            )



            # Uploaded File

            if metadata.get("type") == "uploaded_file":


                context += f"""

Source:
{source}

Document Type:
Uploaded File


Content:
{doc.page_content}

"""



            # Article Database

            else:


                context += f"""

Title:
{title}

Category:
{category}

Source:
Article


Content:
{doc.page_content}

"""



        return context





rag_service = RAGService()