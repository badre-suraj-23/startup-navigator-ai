from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr


# =====================================================
# User
# =====================================================

class UserRegister(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    full_name: str
    email: EmailStr
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


# =====================================================
# Articles
# =====================================================

class ArticleCreate(BaseModel):
    title: str
    slug: str
    category: str
    content: str


class ArticleUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    category: Optional[str] = None
    content: Optional[str] = None


class ArticleResponse(BaseModel):
    id: int
    title: str
    slug: str
    category: str
    content: str
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# =====================================================
# AI Search
# =====================================================

class AIRequest(BaseModel):
    question: str


class AIResponse(BaseModel):
    answer: str


class SearchRequest(BaseModel):
    query: str


class SearchResponse(BaseModel):
    answer: str


# =====================================================
# Search History
# =====================================================

class SearchHistoryCreate(BaseModel):
    question: str
    answer: str


class SearchHistoryResponse(BaseModel):
    id: int
    user_id: int
    question: str
    answer: str
    created_at: datetime

    class Config:
        from_attributes = True