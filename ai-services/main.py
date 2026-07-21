from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from google import genai
from routers import resume, cover_letter, interview
import os

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

app = FastAPI(title="Job Tracker Pro - AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:5000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(resume.router)
app.include_router(cover_letter.router)
app.include_router(interview.router)

@app.get("/")
def home():
    return {"message": "Job Tracker Pro AI Service is running! 🚀"}

@app.get("/health")
def health():
    return {"status": "OK", "gemini_key_loaded": bool(os.getenv("GEMINI_API_KEY"))}

@app.get("/list-models")
def list_models():
    models = client.models.list()
    return {"available_models": [m.name for m in models]}