# About SlashV3's queries.js file 
The queries.js file exports two GraphQL queries: getWishlist and listWishlists. These queries are used to retrieve data from the Wishlist data model.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/graphql/queries.js)

# File Description
getWishlist:
Operation: Query
Action: Retrieves a single Wishlist item by its ID.
Input:
$id: The ID of the Wishlist item to retrieve.
Output: Returns the Wishlist item with its attributes.

listWishlists:
Operation: Query
Action: Retrieves a list of Wishlist items based on specified filters, with optional pagination.
Input:
$filter: Filter criteria to apply when querying Wishlist items (optional).
$limit: Maximum number of items to return (optional).
$nextToken: Token for paginating through the results (optional).
Output: Returns a list of Wishlist items, along with the next pagination token.

These queries are designed to interact with a GraphQL API that supports the necessary operations for querying Wishlist items from a data store.
