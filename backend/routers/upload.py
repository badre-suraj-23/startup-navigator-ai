from fastapi import APIRouter, UploadFile, File, HTTPException
import os

from services.ingest_service import ingest_service


router = APIRouter(
    prefix="/upload",
    tags=["Upload"]
)



UPLOAD_DIR = "uploads"


os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)



@router.post("/")
async def upload_file(
    file: UploadFile = File(...)
):


    # Allowed files

    allowed_extensions = [
        ".pdf",
        ".txt"
    ]


    extension = os.path.splitext(
        file.filename
    )[1].lower()



    if extension not in allowed_extensions:

        raise HTTPException(

            status_code=400,

            detail="Only PDF and TXT files are allowed"

        )



    file_path = os.path.join(

        UPLOAD_DIR,

        file.filename

    )



    # Save uploaded file

    with open(file_path, "wb") as buffer:


        buffer.write(

            await file.read()

        )




    # File -> ChromaDB

    count = ingest_service.ingest_file(

        file_path

    )




    return {


        "message": "File uploaded and indexed successfully",


        "filename": file.filename,


        "indexed_chunks": count


    }