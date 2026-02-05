from pymongo import MongoClient
import os
from dotenv import load_dotenv
from pathlib import Path

# Explicitly load .env from backend directory
env_path = Path(__file__).resolve().parent.parent / ".env"
load_dotenv(dotenv_path=env_path)

MONGO_URL = os.getenv("MONGO_URL")

if MONGO_URL is None:
    raise Exception(f"MONGO_URL not found. Looked in {env_path}")

client = MongoClient(MONGO_URL)
db = client["yogasensei"]

users_collection = db["users"]

