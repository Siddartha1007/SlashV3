"""
Copyright (C) 2023 SE SlashV2 - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: SEslash0041@gmail.com

"""
import unittest
from unittest.mock import patch
from bs4 import BeautifulSoup
import os
import sys
import inspect
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)
import src.scraper.scraper as scraper


class Testscraper(unittest.TestCase):

    def setUp(self):
        # Setup common test data and mocks here if needed
        pass

    @patch('scraper.scraper.requests.get')
    def test_httpsGet_success(self, mock_get):
        # Setup mock response for successful HTTP request
        mock_get.return_value.status_code = 200
        mock_get.return_value.content = '<html><head></head><body><p>Test Content</p></body></html>'

        # Call the function
        result = scraper.httpsGet('http://example.com')

        # Assertions
        self.assertIsNotNone(result)
        self.assertIsInstance(result, BeautifulSoup)

   
    @patch('scraper.scraper.httpsGet')
    def test_search(self, mock_httpsGet):
        # Mock the httpsGet function and setup a test response
        mock_httpsGet.return_value = BeautifulSoup('<html><head></head><body><div class="item">Test Item</div></body></html>', 'html.parser')

        # Define a mock config for testing
        test_config = {
            'site': 'testsite',
            'url': 'http://testsite.com/',
            'item_component': 'div',
            'item_indicator': {'class': 'item'},
            # Define other necessary selectors for title, price, link, image_url
        }

        # Call the search function
        result = scraper.search("test query", test_config)

        # Assertions
        self.assertIsInstance(result, list)
        # Add more assertions to check if the items are parsed correctly

    # Add tests for the scrape function

if __name__ == '__main__':
    unittest.main()