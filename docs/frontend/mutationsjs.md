# About SlashV3's mutations.js file 
The mutations.js file exports three GraphQL mutations: createWishlist, updateWishlist, and deleteWishlist. These mutations are responsible for creating, updating, and deleting entries in the Wishlist data model, respectively.

# Location of Code file
https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/graphql/mutations.js

# File Description
createWishlist:
Operation: Mutation
Action: Creates a new Wishlist item.
Input:
$input: Input data for creating a Wishlist item.
$condition: Condition for creating the Wishlist item (optional).
Output: Returns the created Wishlist item with its attributes.

updateWishlist:
Operation: Mutation
Action: Updates an existing Wishlist item.
Input:
$input: Input data for updating the Wishlist item.
$condition: Condition for updating the Wishlist item (optional).
Output: Returns the updated Wishlist item with its attributes.

deleteWishlist:
Operation: Mutation
Action: Deletes an existing Wishlist item.
Input:
$input: Input data for deleting the Wishlist item.
$condition: Condition for deleting the Wishlist item (optional).
Output: Returns the deleted Wishlist item with its attributes.

These mutations are designed to interact with a GraphQL API that supports the necessary operations for managing Wishlist items in a data store.
