# About SlashV3's main.py file
This file is the main entry point for the FastAPI application. 
FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
The application provides an API for web scraping product information from various online retailers like Amazon, Walmart, Target, etc., and storing the scraped data in a PostgreSQL database.

# Location of Code for this Feature
(https://github.com/Siddartha1007/SlashV3/blob/main/src/main.py)

# Code Description
The code begins with importing necessary modules and packages, including FastAPI, CORS middleware, file response, and database-related libraries.
It checks the deployment environment and loads environment variables accordingly using the dotenv library.
The database connection details (e.g., dbname, user, password, host, port) are configured based on the environment variables.
The FastAPI app is created, and CORS middleware is added to handle Cross-Origin Resource Sharing.
There is a root endpoint ("/") that redirects to the API documentation using Redoc.
The "/scrape" endpoint is defined as a trigger to start the web scraping process. It uses multithreading to concurrently initiate scraping for different categories (laptops, anime, phones) using the search_items_API function.
The search_items_API function is a wrapper API for fetching search results from various e-commerce sites. It takes parameters such as the site code, item name, and an optional parameter to export the results.
Inside the search_items_API function, a list of site codes and their corresponding mappings is defined. The scraper is then called to fetch search results using the specified parameters.
The search results are processed, and if the export flag is not set, the results are inserted into a PostgreSQL database table named "item".
The main block checks if the script is run directly (not imported) and starts the FastAPI application using Uvicorn on host "0.0.0.0" and port 8000.

# How to run this file?
In command prompt open the directory in which the file exists and enter python main.py to run this file.
