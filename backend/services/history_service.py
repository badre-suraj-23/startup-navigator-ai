from sqlalchemy.orm import Session

from models import SearchHistory


class HistoryService:

    # ==========================================
    # Save Search
    # ==========================================

    def save_history(
        self,
        db: Session,
        user_id: int,
        question: str,
        answer: str,
    ):

        history = SearchHistory(
            user_id=user_id,
            question=question,
            answer=answer,
        )

        db.add(history)
        db.commit()
        db.refresh(history)

        return history

    # ==========================================
    # Get User History
    # ==========================================

    def get_history(
        self,
        db: Session,
        user_id: int,
    ):

        return (
            db.query(SearchHistory)
            .filter(SearchHistory.user_id == user_id)
            .order_by(SearchHistory.created_at.desc())
            .all()
        )

    # ==========================================
    # Delete One History
    # ==========================================

    def delete_history(
        self,
        db: Session,
        history_id: int,
        user_id: int,
    ):

        history = (
            db.query(SearchHistory)
            .filter(
                SearchHistory.id == history_id,
                SearchHistory.user_id == user_id,
            )
            .first()
        )

        if not history:
            return False

        db.delete(history)
        db.commit()

        return True

    # ==========================================
    # Clear All History
    # ==========================================

    def clear_history(
        self,
        db: Session,
        user_id: int,
    ):

        (
            db.query(SearchHistory)
            .filter(SearchHistory.user_id == user_id)
            .delete()
        )

        db.commit()

        return True


history_service = HistoryService()