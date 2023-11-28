from fastapi import FastAPI
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import *
from pydantic import BaseModel
from sqlalchemy import create_engine

SQLALCHEMY_DATABASE_URL = "postgresql://postgres:123@localhost/projecteducation"
engine = create_engine(SQLALCHEMY_DATABASE_URL)


Base = declarative_base()
class Data (Base):
    __tablename__ = "data"

    id = Column(Integer, primary_key=True, index=True)
    head = Column(String)
    picture = Column(String)
    text = Column(String)
    idkateg = Column(Integer)


class Kategori (Base):
    __tablename__ = "kateg"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)


SessionLocal = sessionmaker(autoflush=False, bind=engine)
db = SessionLocal()


app = FastAPI()