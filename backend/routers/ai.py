from fastapi import APIRouter
from services.rag_service import rag_service
from schemas import (
    AIRequest,
    AIResponse
)

from services.prompt_builder import build_prompt
from services.groq_service import groq_service
router = APIRouter(
    prefix="/ai",
    tags=["AI"]
)

@router.post(
    "/chat",
    response_model=AIResponse
)
def chat(
    request: AIRequest
):

    context = rag_service.retrieve_context(
        request.question
    )

    prompt = build_prompt(
        context=context,
        question=request.question
    )

    answer = groq_service.generate_response(
        prompt
    )

    return AIResponse(
        answer=answer
    )