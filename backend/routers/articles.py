from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from services.ingest_service import ingest_service

from database import get_db
from models import Article
from schemas import (
    ArticleCreate,
    ArticleUpdate,
    ArticleResponse,
)

from routers.auth import get_current_user
from models import User

router = APIRouter(
    prefix="/articles",
    tags=["Articles"]
)


@router.post(
    "/",
    response_model=ArticleResponse
)
def create_article(
    article: ArticleCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):

    existing_article = (
        db.query(Article)
        .filter(Article.slug == article.slug)
        .first()
    )

    if existing_article:
        raise HTTPException(
            status_code=400,
            detail="Slug already exists."
        )

    new_article = Article(
        title=article.title,
        slug=article.slug,
        category=article.category,
        content=article.content,
    )

    db.add(new_article)
    db.commit()
    db.refresh(new_article)

    ingest_service.ingest_articles()

    return new_article

@router.get(
    "/",
    response_model=list[ArticleResponse]
)
def get_all_articles(
    db: Session = Depends(get_db)
):

    articles = (
        db.query(Article)
        .order_by(Article.created_at.desc())
        .all()
    )

    return articles

@router.get(
    "/{article_id}",
    response_model=ArticleResponse
)
def get_article(
    article_id: int,
    db: Session = Depends(get_db)
):

    article = (
        db.query(Article)
        .filter(Article.id == article_id)
        .first()
    )

    if not article:
        raise HTTPException(
            status_code=404,
            detail="Article not found."
        )

    return article


@router.put(
    "/{article_id}",
    response_model=ArticleResponse
)
def update_article(
    article_id: int,
    article: ArticleUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):

    db_article = (
        db.query(Article)
        .filter(Article.id == article_id)
        .first()
    )

    if not db_article:
        raise HTTPException(
            status_code=404,
            detail="Article not found."
        )

    update_data = article.model_dump(exclude_unset=True)

    for key, value in update_data.items():
        setattr(db_article, key, value)

    db.commit()
    db.refresh(db_article)
    ingest_service.ingest_articles()
    return db_article

@router.delete(
    "/{article_id}"
)
def delete_article(
    article_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user)
):

    article = (
        db.query(Article)
        .filter(Article.id == article_id)
        .first()
    )

    if not article:
        raise HTTPException(
            status_code=404,
            detail="Article not found."
        )

    db.delete(article)
    db.commit()
    ingest_service.ingest_articles()

    return {
        "message": "Article deleted successfully."
    }