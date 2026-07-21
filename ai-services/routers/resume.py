from fastapi import APIRouter, UploadFile, File
from models.schemas import ResumeMatchRequest
from services.gemini_client import generate_json
from services.pdf_extractor import extract_text_from_pdf

router = APIRouter(prefix="/ai", tags=["Resume"])

@router.post("/resume-match")
def resume_match(data: ResumeMatchRequest):
    prompt = f"""
You are an expert recruiter. Compare the following resume with the job description and respond ONLY in valid JSON format (no markdown, no extra text) with this exact structure:

{{
  "match_score": <number from 0 to 100>,
  "matched_skills": ["skill1", "skill2"],
  "missing_skills": ["skill1", "skill2"],
  "suggestions": ["suggestion1", "suggestion2", "suggestion3"]
}}

Resume:
{data.resume}

Job Description:
{data.job_description}
"""

    result = generate_json(prompt)
    return result


# New endpoint — extract text from an uploaded PDF resume
@router.post("/extract-resume-text")
async def extract_resume_text(file: UploadFile = File(...)):
    file_bytes = await file.read()
    extracted_text = extract_text_from_pdf(file_bytes)
    return {"resume_text": extracted_text}