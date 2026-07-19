# 🚀 Startup Navigator AI

Startup Navigator AI is a modern AI-powered web application that helps entrepreneurs explore startup-related topics such as company registration, funding, legal compliance, branding, hiring, taxation, business growth, and AI tools.

The application uses Retrieval-Augmented Generation (RAG) to answer user questions from an internal knowledge base as well as user-uploaded PDF/TXT documents.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Logout

---

## 📚 Knowledge Base

- Admin can Add Articles
- Update Articles
- Delete Articles
- Categorize Articles
- Store startup resources

---

## 🤖 AI Search

- Retrieval-Augmented Generation (RAG)
- ChromaDB Vector Database
- HuggingFace Embeddings
- Groq LLM Integration
- Semantic Search
- Context-based AI Answers

---

## 📄 Document Upload

- Upload PDF
- Upload TXT Files
- Automatic Indexing
- Ask Questions from Uploaded Documents

---

## 📊 Dashboard

- Total Articles
- Total Searches
- Categories
- Recent Search History

---

## 📜 Search History

- Previous AI Questions
- AI Answers
- Re-open Conversations

---

## 📱 Responsive UI

- Desktop
- Tablet
- Mobile Friendly

---

# 🛠 Tech Stack

## Backend

- FastAPI
- SQLAlchemy
- PostgreSQL
- JWT Authentication
- LangChain
- ChromaDB
- HuggingFace Embeddings
- Groq API
- Pydantic

---

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- React Dropzone

---

# 🧠 AI Architecture

User Question

↓

Retrieve Similar Documents (ChromaDB)

↓

Build Prompt

↓

Groq LLM

↓

AI Response

---

# 📁 Project Structure

backend/

- routers/
- services/
- models/
- schemas/
- uploads/
- chroma_db/

frontend/

- components/
- layouts/
- pages/
- services/

---

# ⚙️ Environment Variables

Backend (.env)

```
DATABASE_URL=
JWT_SECRET=
GROQ_API_KEY=
LLM_MODEL=
HF_MODEL=
```

---

# 🚀 Run Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

---

# 🚀 Run Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🌍 Deployment

Frontend

- Vercel

Backend

- Render

Database

- PostgreSQL (Render)

Vector Database

- ChromaDB Persistent Storage

---

# 🧪 Testing

- Authentication
- CRUD APIs
- AI Search
- PDF Upload
- Search History
- Dashboard APIs
- Responsive UI

---

# 📷 Screenshots

Add screenshots here after deployment.

---

# 📌 Future Improvements

- Conversation Memory
- AI Streaming Responses
- Multiple File Upload
- Markdown Rendering
- AI Citations
- User-specific Knowledge Base
- Admin Analytics

---

# 👨‍💻 Developer

**Suraj Badre Patil**

Python Backend & Generative AI Developer

GitHub:
https://github.com/badre-suraj-23

LinkedIn:
https://linkedin.com/in/suraj-badre

Email:
surajbadre.dev@gmail.com

---

# 📄 License

This project was developed for educational and technical evaluation purposes.