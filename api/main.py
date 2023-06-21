from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.routers import (
    spotify_router,
    user_router
)

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(spotify_router, prefix="/spotify", tags=["Spotify"])
app.include_router(user_router, prefix="/user", tags=["User"])

@app.get("/")
async def read_root():
    return { "Hello": "World" }