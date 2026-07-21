from pypdf import PdfReader
from io import BytesIO

def extract_text_from_pdf(file_bytes: bytes) -> str:
    """Extracts all text from a PDF file's byte content."""
    pdf_reader = PdfReader(BytesIO(file_bytes))
    
    text = ""
    for page in pdf_reader.pages:
        text += page.extract_text() + "\n"
    
    return text.strip()