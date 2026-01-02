import uvicorn
from fastapi import FastAPI

app = FastAPI(docs_url="/")


@app.get("/test")
async def test():
    return {"Hello": "World"}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1")
