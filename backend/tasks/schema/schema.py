from datetime import datetime
from pydantic import BaseModel, Field

class TaskBase(BaseModel):
    title:str
    created_at: datetime  = Field(default_factory=datetime.now)

    class Config:
        orm_mode = True


class TaskCreate(TaskBase):
    pass


class TaskRead(TaskBase):    
    completed_at : datetime | None 
    time_taken: int | None
    id: int

class TaskPartialUpdate(BaseModel):
    title: str | None
    time_taken: int | None
    completed_at: datetime | None
    