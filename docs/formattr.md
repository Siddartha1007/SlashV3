# About SlashV3's formattr.py file  
This file is named formattr.py and is part of a module that focuses on processing raw text extracted from HTML during web scraping. The module provides functions for formatting and extracting relevant information from the scraped data.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/src/scraper/formattr.py)

# File Description
Imports:
Imports necessary modules: datetime for handling date and time, math for mathematical operations, html for HTML entity decoding, and re for regular expressions.

Function: formatResult:
Takes scraped HTML elements (titles, prices, links, image URLs) and processes them to create a dictionary (product) containing formatted information.
Uses regular expressions to extract and format prices.
The resulting dictionary includes timestamp, formatted title, formatted price, formatted link, website, and image URL.

Function: formatSearchQuery:
Formats a search string into a format suitable for use as a URL parameter.

Function: formatSearchQueryForCostco:
Similar to formatSearchQuery but specific to Costco. Formats a search string into a format suitable for use as a URL parameter.

Function: formatTitle:
Decodes HTML entities in a title and shortens it if it exceeds 40 characters.

Function: getNumbers:
Extracts float values (prices) from a string. For example, it extracts 10.99 from '$10.99' or 'starting at $10.99'.

Hence, formattr.py provides functions for formatting and extracting relevant information from raw text obtained during web scraping, specifically tailored for processing data from e-commerce websites.
