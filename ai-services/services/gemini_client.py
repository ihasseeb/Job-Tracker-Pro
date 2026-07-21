from google import genai
from dotenv import load_dotenv
import os
import json
import re

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_content(prompt: str) -> str:
    """Sends a prompt to Gemini and returns the raw text response."""
    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt
    )
    return response.text

def generate_json(prompt: str):
    """Sends a prompt to Gemini and returns parsed JSON (dict or list)."""
    raw_text = generate_content(prompt)

    # Gemini sometimes wraps JSON in markdown code blocks (```json ... ```)
    # This removes those wrappers if present
    cleaned = re.sub(r"^```json\s*|\s*```$", "", raw_text.strip())

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        # If parsing fails, return the raw text so we can debug it
        return {"error": "Failed to parse AI response as JSON", "raw": raw_text}