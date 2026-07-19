# from auth.password import hash_password

# print(hash_password("12345678"))

# from database import SessionLocal
# from models import User

# db = SessionLocal()

# users = db.query(User).all()

# print(f"Total Users: {len(users)}")

# for user in users:
#     print("----------------------")
#     print("ID:", user.id)
#     print("Name:", user.full_name)
#     print("Email:", user.email)
#     print("Password:", user.password)


#     # debug_tables.py

# from database import engine
# from sqlalchemy import inspect

# inspector = inspect(engine)

# print(inspector.get_table_names())

# from config import settings

# print(settings.GEMINI_API_KEY)

# from services.gemini_service import gemini_service

# response = gemini_service.generate_response(
#     "Explain Startup India in 100 words."
# )

# print(response)



# from services.prompt_builder import build_prompt

# prompt = build_prompt(
#     "How do I register a startup in India?"
# )

# print(prompt)

# from services.embedding_service import embedding_service

# vector = embedding_service.embed_text(
#     "How do I register startup?"
# )

# print(len(vector))
# print(vector[:5])

# from services.chroma_service import chroma_service

# print("Chroma Loaded Successfully")

# from services.ingest_service import ingest_service

# count = ingest_service.ingest_articles()

# print(f"{count} chunks stored.")

# from services.rag_service import rag_service

# context = rag_service.retrieve_context(
#     "How do I register a startup?"
# )

# print(context)


from services.ingest_service import ingest_service

count = ingest_service.ingest_articles()

print(count)