from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from database import get_db

from models import User

from schemas import SearchHistoryResponse

from routers.auth import get_current_user

from services.history_service import history_service

router = APIRouter(
    prefix="/history",
    tags=["Search History"],
)


# ==========================================
# Get Logged-in User History
# ==========================================

@router.get(
    "/",
    response_model=List[SearchHistoryResponse],
)
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return history_service.get_history(
        db=db,
        user_id=current_user.id,
    )


# ==========================================
# Delete One History
# ==========================================

@router.delete("/{history_id}")
def delete_history(
    history_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    deleted = history_service.delete_history(
        db=db,
        history_id=history_id,
        user_id=current_user.id,
    )

    if not deleted:

        raise HTTPException(
            status_code=404,
            detail="History not found",
        )

    return {
        "message": "History deleted successfully"
    }


# ==========================================
# Clear All History
# ==========================================

@router.delete("/")
def clear_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    history_service.clear_history(
        db=db,
        user_id=current_user.id,
    )

    return {
        "message": "All history cleared successfully"
    }