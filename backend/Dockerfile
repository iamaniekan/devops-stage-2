
FROM python:3.10-slim

# Install Poetry
RUN pip install poetry

# Set the working directory inside the container
WORKDIR /app

# Copy pyproject.toml and poetry.lock
COPY pyproject.toml poetry.lock ./

# Install dependencies using Poetry
RUN poetry config virtualenvs.create false \
    && poetry install --no-interaction --no-ansi

# Copy the rest of the application code
COPY . .

# Expose port 8000
EXPOSE 8000

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Use entrypoint script to run prestart.sh and start FastAPI server
ENTRYPOINT ["/entrypoint.sh"]
