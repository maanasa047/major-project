from fastapi import APIRouter, HTTPException
from app.database import users_collection
from app.schemas.auth_schema import SignupRequest, LoginRequest
from app.utils.security import hash_password, verify_password

router = APIRouter(prefix="/auth", tags=["Auth"])

@router.post("/signup")
def signup(data: SignupRequest):
    if users_collection.find_one({"email": data.email}):
        raise HTTPException(status_code=400, detail="User already exists")

    users_collection.insert_one({
        "email": data.email,
        "password": hash_password(data.password)
    })

    return {"message": "Signup successful"}

@router.post("/login")
def login(data: LoginRequest):
    user = users_collection.find_one({"email": data.email})

    if not user or not verify_password(data.password, user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful"}
