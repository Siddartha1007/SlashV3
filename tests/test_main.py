"""
Copyright (C) 2023 SE SlashV3 - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: SEslash0041@gmail.com

"""

from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
import pytest
import main
import json

client = TestClient(main.app)

# Test for scrape endpoint
def test_scrape():
    response = client.get("/scrape")
    assert response.status_code == 200
    assert response.json() == "done"

# Mocking the database connection for search_items_API
@patch('main.psycopg2.connect')
def test_search_items_api(mock_connect):
    # Create a mock connection and cursor
    mock_conn = MagicMock()
    mock_cursor = MagicMock()
    mock_connect.return_value = mock_conn
    mock_conn.cursor.return_value = mock_cursor

    # Simulate a call to the API
    main.search_items_API('all', 'laptops')

    # Ensure that SQL execute was called
    mock_cursor.execute.assert_called()
    mock_conn.commit.assert_called()

    # Close mock cursor and connection
    mock_cursor.close.assert_called()
    mock_conn.close.assert_called()

if __name__ == '__main__':
    pytest.main()
