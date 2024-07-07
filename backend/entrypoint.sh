#!/bin/sh

# Run prestart.sh script
./prestart.sh

# Start the FastAPI server
exec uvicorn app.main:app --host 0.0.0.0 --port 8000
