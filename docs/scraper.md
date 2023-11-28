# About SlashV3's scraper.py file 
This file is named scraper.py which is a module for conducting web scraping of e-commerce websites. It relies on the BeautifulSoup library for HTML parsing and requests library for making HTTP requests.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/src/scraper/scraper.py)

# File Description
Imports:
Imports necessary modules: BeautifulSoup for HTML parsing, requests for making HTTP requests, form from the local formattr module for formatting, and configurations for Amazon, Walmart, Costco, and Best Buy.

Function: httpsGet:
Makes an HTTP call to the specified URL with custom headers.
Returns the HTML of the requested page as a BeautifulSoup object.

Function: search:
Scrapes the given configuration for a specific item based on the provided query.
Utilizes the httpsGet function to fetch the HTML of the specified URL.
Parses the page content, extracts relevant information using CSS selectors, and formats the results using form.formatResult.
Returns a list of items (products) from the website.

Function: scrape:
Conducts scraping of sites based on the provided scrapers.
Takes a dictionary of arguments (args) containing the search query (args['search']) and a list of scrapers to use (scrapers).
Calls the search function for each specified scraper and aggregates the results into a list.
Returns the overall list of items returned from the scrapers.

Hence, scraper.py serves as a module for conducting web scraping of e-commerce websites. It provides functions for making HTTP requests, parsing HTML content, and formatting the results based on configurations for Amazon, Walmart, Costco, and Best Buy. The module is designed to be modular and extendable, allowing for easy addition of new scrapers or modifications to existing ones.
