# 🚀 Startup Navigator AI

Startup Navigator AI is an AI-powered platform that helps entrepreneurs, founders, and startups explore business-related topics such as company registration, funding, taxation, compliance, branding, hiring, marketing, and business growth.

The application uses Retrieval-Augmented Generation (RAG) to answer user queries from an internal knowledge base as well as uploaded PDF/TXT documents using semantic search.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Secure Password Hashing
- Logout

---

## 📚 Knowledge Base

- Add Articles
- Update Articles
- Delete Articles
- Organize by Categories
- Startup Knowledge Repository

---

## 🤖 AI Search

- Retrieval-Augmented Generation (RAG)
- Qdrant Cloud Vector Database
- Jina AI Embeddings
- Groq LLM Integration
- Semantic Search
- Context-aware AI Responses

---

## 📄 Document Upload

- Upload PDF Files
- Upload TXT Files
- Automatic Document Indexing
- AI Question Answering from Uploaded Documents

---

## 📊 Dashboard

- Total Articles
- Total Searches
- Categories
- Recent Search History

---

## 📜 Search History

- Previous AI Questions
- AI Responses
- Re-open Previous Conversations

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
- Qdrant Cloud
- Jina AI Embeddings
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

```
User Question
       │
       ▼
Generate Embedding (Jina AI)
       │
       ▼
Qdrant Cloud Similarity Search
       │
       ▼
Retrieve Relevant Context
       │
       ▼
Prompt Builder
       │
       ▼
Groq LLM
       │
       ▼
AI Response
```

---

# 📁 Project Structure

```
startup-navigator-ai/

├── backend/
│   ├── auth/
│   ├── routers/
│   ├── services/
│   ├── uploads/
│   ├── app.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Environment Variables

Backend (.env)

```env
APP_NAME=Startup Navigator API
APP_VERSION=1.0.0

DATABASE_URL=

GROQ_API_KEY=
LLM_MODEL=llama-3.1-8b-instant

JINA_API_KEY=

QDRANT_URL=
QDRANT_API_KEY=

SECRET_KEY=
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=1440
```

---

# 🚀 Run Backend

```bash
cd backend

python -m venv venv

# Windows
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

### Frontend

- Vercel

### Backend

- Render

### Database

- PostgreSQL (Render)

### Vector Database

- Qdrant Cloud

### Embedding Model

- Jina AI

### LLM

- Groq

---

# 🧪 Testing

- Authentication APIs
- Article CRUD APIs
- AI Search
- PDF Upload
- Search History
- Dashboard APIs
- Responsive UI

---

# 🚀 Future Improvements

- Conversation Memory
- Streaming AI Responses
- Multiple Document Upload
- Markdown Rendering
- Source Citations
- User-specific Knowledge Base
- Role-based Admin Panel
- AI Analytics Dashboard

---

# 👨‍💻 Developer

**Suraj Badre Patil**

Python Backend & Generative AI Developer

**GitHub**  
https://github.com/badre-suraj-23

**LinkedIn**  
https://www.linkedin.com/in/suraj-badre/

**Email**  
surajbadre.dev@gmail.com

---

# 📄 License

This project is developed for educational, learning, and technical evaluation purposes.