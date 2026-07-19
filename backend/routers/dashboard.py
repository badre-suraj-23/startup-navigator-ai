from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from database import get_db
from models import Article, SearchHistory


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/stats")
def dashboard_stats(
    db: Session = Depends(get_db)
):

    # Total articles
    total_articles = (
        db.query(Article)
        .count()
    )


    # Total searches
    total_searches = (
        db.query(SearchHistory)
        .count()
    )


    # Total unique categories
    total_categories = (
        db.query(Article.category)
        .distinct()
        .count()
    )


    # Latest search
    last_search = (
        db.query(SearchHistory)
        .order_by(
            SearchHistory.created_at.desc()
        )
        .first()
    )


    return {

        "total_articles": total_articles,

        "total_searches": total_searches,

        "total_categories": total_categories,

        "last_search":
            last_search.question
            if last_search
            else None
    }