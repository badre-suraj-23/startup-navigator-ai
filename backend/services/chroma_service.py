from uuid import uuid4

from qdrant_client import QdrantClient
from qdrant_client.models import (
    Distance,
    VectorParams,
    PointStruct,
)

from config import settings
from services.embedding_service import embedding_service


class QdrantService:

    def __init__(self):

        self.collection_name = "startup_articles"

        self.client = QdrantClient(
            url=settings.QDRANT_URL,
            api_key=settings.QDRANT_API_KEY,
        )

        self._create_collection()

    def _create_collection(self):

        collections = [
            c.name
            for c in self.client.get_collections().collections
        ]

        if self.collection_name not in collections:

            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(
                    size=1024,
                    distance=Distance.COSINE,
                ),
            )

    def add_documents(self, documents):

        points = []

        for doc in documents:

            embedding = embedding_service.embed_text(
                doc.page_content
            )

            points.append(
                PointStruct(
                    id=str(uuid4()),
                    vector=embedding,
                    payload={
                        "page_content": doc.page_content,
                        **doc.metadata,
                    },
                )
            )

        self.client.upsert(
            collection_name=self.collection_name,
            points=points,
        )

    def similarity_search(
        self,
        query: str,
        k: int = 5,
    ):

        embedding = embedding_service.embed_text(query)

        results = self.client.query_points(
            collection_name=self.collection_name,
            query=embedding,
            limit=k,
        )

        return results.points

    def reset_collection(self):

        self.client.delete_collection(
            self.collection_name
        )

        self._create_collection()


chroma_service = QdrantService()