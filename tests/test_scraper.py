"""
Copyright (C) 2023 SE SlashV3 - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: SEslash0041@gmail.com

"""
import unittest
from unittest.mock import patch
from bs4 import BeautifulSoup
import src.scraper.scraper as scraper


class Testscraper(unittest.TestCase):

    def setUp(self):
        pass

    @patch('scraper.scraper.requests.get')
    def test_httpsGet_success(self, mock_get):
        mock_get.return_value.status_code = 200
        mock_get.return_value.content = '<html><head></head><body><p>Test Content</p></body></html>'

        result = scraper.httpsGet('http://example.com')

        # Assertions
        self.assertIsNotNone(result)
        self.assertIsInstance(result, BeautifulSoup)

   
    @patch('scraper.scraper.httpsGet')
    def test_search(self, mock_httpsGet):
        mock_httpsGet.return_value = BeautifulSoup('<html><head></head><body><div class="item">Test Item</div></body></html>', 'html.parser')

        test_config = {
            'site': 'testsite',
            'url': 'http://testsite.com/',
            'item_component': 'div',
            'item_indicator': {'class': 'item'},
        }

        result = scraper.search("test query", test_config)

        # Assertions
        self.assertIsInstance(result, list)

if __name__ == '__main__':
    unittest.main()