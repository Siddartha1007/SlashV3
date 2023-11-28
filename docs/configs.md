# About SlashV3's configs.py file 
This file is named configs.py and appears to contain configurations for web scraping different e-commerce websites, specifically Walmart, Amazon, Costco, and Best Buy.
The configurations include the website's URL structure and the HTML elements that indicate various aspects of items such as title, price, link, and image URL.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/src/scraper/configs.py)

# File Description
Imports:
Imports datetime for handling date and time.
Imports requests for making HTTP requests.
Imports Connection from ebaysdk.finding for eBay API connectivity.
Imports formatTitle from a local module named formattr in the scraper package.

Configurations:
Defines configurations for Walmart, Amazon, Costco, and Best Buy websites. Each configuration is a dictionary containing details such as site name, URL structure, HTML indicators for items, titles, prices, links, and image URLs.
These configurations serve as templates for web scraping and can be used to extract specific information from the respective e-commerce sites.
The individual configurations (WALMART, AMAZON, COSTCO, BESTBUY) are included in a list named CONFIGS.

Hence, the configs.py file centralizes configurations for web scraping multiple e-commerce websites, providing a modular and organized approach for extracting information from these sites.
