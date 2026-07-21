from fastapi import APIRouter
from models.schemas import InterviewPrepRequest
from services.gemini_client import generate_json

router = APIRouter(prefix="/ai", tags=["Interview Prep"])

@router.post("/interview-questions")
def generate_interview_questions(data: InterviewPrepRequest):
    prompt = f"""
You are an interview coach. Based on the role and job description below, generate 6 likely interview questions along with a suggested answer approach for each. Respond ONLY in valid JSON format (no markdown, no extra text) with this exact structure:

[
  {{
    "question": "...",
    "category": "technical",
    "suggested_answer": "A concise 2-3 sentence guide on how to approach answering this question, with key points to mention."
  }}
]

Include 2 technical, 2 behavioral, and 2 company-specific questions. The "suggested_answer" should be practical advice/structure, not a full scripted answer — help the candidate think through their own real experience.

Role: {data.role}
Job Description: {data.job_description}
"""

    result = generate_json(prompt)
    return {"questions": result}