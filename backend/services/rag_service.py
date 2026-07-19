from services.chroma_service import chroma_service


class RAGService:

    def retrieve_context(
        self,
        question: str,
        k: int = 5
    ) -> str:

        results = chroma_service.similarity_search(
            query=question,
            k=k
        )

        if not results:
            return ""

        context = ""

        for result in results:

            payload = result.payload

            title = payload.get("title", "")
            category = payload.get("category", "")
            source = payload.get("source", "")
            content = payload.get("page_content", "")

            # Uploaded File
            if payload.get("type") == "uploaded_file":

                context += f"""

Source:
{source}

Document Type:
Uploaded File

Content:
{content}

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
{content}

"""

        return context


rag_service = RAGService()