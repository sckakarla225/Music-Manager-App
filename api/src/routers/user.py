from fastapi import APIRouter, status
from src.utils import async_fail_gracefully

router = APIRouter()

@router.get('/', status_code=status.HTTP_200_OK)
# @async_fail_gracefully
async def user_index():
    return { 'User': 'Index' }