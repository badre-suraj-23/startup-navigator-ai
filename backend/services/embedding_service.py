from langchain_huggingface import HuggingFaceEmbeddings

class EmbeddingService:

    def __init__(self):

        self.embedding_model = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )

    def embed_text(
        self,
        text: str
    ):
        return self.embedding_model.embed_query(text)

    def embed_documents(
        self,
        documents: list[str]
    ):
        return self.embedding_model.embed_documents(documents)


embedding_service = EmbeddingService()