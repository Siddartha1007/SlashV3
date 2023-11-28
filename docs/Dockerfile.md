# About SlashV3's Dockerfile file
This is a Dockerfile used to create a Docker image for a Python application, i.e., FastAPI application.
It specifies the base image as the official Python 3 image from Docker Hub.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/src/Dockerfile)

# File Description
Base Image:
Specifies the base image as Python 3 from Docker Hub.

Copy Files:
Copies the contents of the current directory to the /app folder in the container. Also copies the requirements.txt file to the root directory of the container.

Working Directory:
Sets the working directory inside the container to /app.

Install Dependencies:
Installs Python dependencies from requirements.txt and installs uvicorn, a server for FastAPI applications.

Expose Port:
Declares environment variable PORT as 8000 and exposes that port for documentation purposes.

Command to Start the App:
Specifies the command to run when the container starts: executing main.py with Python.

Hence, the Dockerfile sets up a containerized environment for a Python application, installs dependencies, and runs a FastAPI application using uvicorn on port 8000.
