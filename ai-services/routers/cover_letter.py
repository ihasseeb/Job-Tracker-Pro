# routers/cover_letter.py
from fastapi import APIRouter
from models.schemas import CoverLetterRequest
from services.gemini_client import generate_content

router = APIRouter(prefix="/ai", tags=["Cover Letter"])

@router.post("/cover-letter")
def generate_cover_letter(data: CoverLetterRequest):
    prompt = f"""
You are a professional career writer. Write a tailored, concise cover letter (3-4 paragraphs) for the following job application. Do not use markdown formatting, just plain text.

Company: {data.company}
Role: {data.role}
Job Description: {data.job_description}
Candidate Resume: {data.resume}
"""

    cover_letter = generate_content(prompt)
    return {"cover_letter": cover_letter}