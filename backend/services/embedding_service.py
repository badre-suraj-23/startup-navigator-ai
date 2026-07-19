import requests

from config import settings


class EmbeddingService:

    def __init__(self):
        self.api_key = settings.JINA_API_KEY
        self.url = "https://api.jina.ai/v1/embeddings"

    def embed_text(self, text: str):

        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "jina-embeddings-v3",
            "input": [text]
        }

        response = requests.post(
            self.url,
            headers=headers,
            json=payload
        )

        response.raise_for_status()

        return response.json()["data"][0]["embedding"]

    def embed_documents(self, documents: list[str]):

        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "jina-embeddings-v3",
            "input": documents
        }

        response = requests.post(
            self.url,
            headers=headers,
            json=payload
        )

        response.raise_for_status()

        return [
            item["embedding"]
            for item in response.json()["data"]
        ]


embedding_service = EmbeddingService()