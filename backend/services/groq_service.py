from groq import Groq

from config import settings


class GroqService:

    def __init__(self):

        self.client = Groq(
            api_key=settings.GROQ_API_KEY
        )

        # Model loaded from .env
        self.model = settings.LLM_MODEL

    def generate_response(
        self,
        prompt: str
    ) -> str:

        """
        Send the final RAG prompt to Groq and
        return the generated answer.
        """

        try:

            response = self.client.chat.completions.create(

                model=self.model,

                messages=[
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],

                temperature=0.2,

                max_tokens=1024,

            )

            answer = response.choices[0].message.content

            if answer:
                return answer.strip()

            return "I couldn't generate an answer."

        except Exception as e:

            print("=" * 60)
            print("Groq Error")
            print("=" * 60)
            print(e)
            print("=" * 60)

            return (
                "⚠️ AI service is temporarily unavailable. "
                "Please try again later."
            )


groq_service = GroqService()