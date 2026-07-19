from google import genai
from config import settings

client = genai.Client(api_key=settings.GROQ_API_KEY)

for model in client.models.list():
    print(model.name)