from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from database import get_db

from models import User
import traceback

from routers.auth import get_current_user

from schemas import (
    SearchRequest,
    SearchResponse,
)

from services.rag_service import rag_service
from services.prompt_builder import build_prompt
from services.groq_service import groq_service
from services.history_service import history_service


router = APIRouter(
    prefix="/search",
    tags=["AI Search"]
)


@router.post(
    "/",
    response_model=SearchResponse
)
def search(
    request: SearchRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        context = rag_service.retrieve_context(
            request.query
        )

        print("=" * 50)
        print(context)
        print("=" * 50)

        prompt = build_prompt(
            context=context,
            question=request.query
        )

        answer = groq_service.generate_response(
            prompt
        )

        # ===================================
        # Save Search History
        # ===================================

        history_service.save_history(
            db=db,
            user_id=current_user.id,
            question=request.query,
            answer=answer,
        )

        return SearchResponse(
            answer=answer
        )

    except Exception as e:

        traceback.print_exc()

        print("=" * 80)
        print(type(e))
        print(e)
        print("=" * 80)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

  