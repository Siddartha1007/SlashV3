# test_main.py

from fastapi.testclient import TestClient
from unittest.mock import patch, MagicMock
import pytest
import main
import json

# Setup FastAPI test client
client = TestClient(main.app)

# Test for root endpoint
# def test_read_root():
#     response = client.get("/")
#     assert response.status_code == 307  # or 302, based on your redirect status
#     assert response.headers["location"] == "/redoc"

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

# Additional tests can be added here to cover other functionalities

if __name__ == '__main__':
    pytest.main()
