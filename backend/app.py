from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from config import settings

import models
from database import Base, engine

from routers import auth, articles, ai, history
from routers.search import router as search_router
from routers import dashboard
from routers import upload

# ==========================================
# Create Tables
# ==========================================

Base.metadata.create_all(bind=engine)


# ==========================================
# FastAPI App
# ==========================================

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
)


# ==========================================
# CORS
# ==========================================

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://startup-navigator-ai-ebon.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================================
# Routers
# ==========================================

app.include_router(auth.router)
app.include_router(articles.router)
app.include_router(ai.router)
app.include_router(search_router)
app.include_router(history.router)
app.include_router(dashboard.router)
app.include_router(upload.router)


# ==========================================
# Root
# ==========================================

@app.get("/")
def root():
    return {
        "message": "Startup Navigator API Running"
    }