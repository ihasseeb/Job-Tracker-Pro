from pydantic import BaseModel

class ResumeMatchRequest(BaseModel):
    resume: str
    job_description: str

class CoverLetterRequest(BaseModel):
    company: str
    role: str
    job_description: str
    resume: str

class InterviewPrepRequest(BaseModel):
    role: str
    job_description: str