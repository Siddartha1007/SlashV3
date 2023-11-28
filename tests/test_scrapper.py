"""
Copyright (C) 2023 SE SlashV2 - All Rights Reserved
You may use, distribute and modify this code under the
terms of the MIT license.
You should have received a copy of the MIT license with
this file. If not, please write to: SEslash0041@gmail.com

"""
import os
import sys
import inspect
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0, parentdir)
import src.scraper.scraper as scrapper


def test_httpsGet_validURL():
    """
    Checks the getNumbers function
    """
    assert scrapper.httpsGet("http://example.com") == '<html></html>'