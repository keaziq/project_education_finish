from fastapi import FastAPI
from database import *
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def data():
    car = db.query(Data).all()
    return car


