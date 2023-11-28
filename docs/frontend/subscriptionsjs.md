# About SlashV3's subscriptions.js file 
The subscriptions.js file exports three GraphQL subscriptions: onCreateWishlist, onUpdateWishlist, and onDeleteWishlist. These subscriptions are used to receive real-time updates when Wishlist items are created, updated, or deleted.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/graphql/subscriptions.js)

# File Description
onCreateWishlist:
Operation: Subscription
Action: Listens for events when a new Wishlist item is created.
Input:
$filter: Filter criteria to apply when listening for created Wishlist items (optional).
Output: Returns the newly created Wishlist item with its attributes.

onUpdateWishlist:
Operation: Subscription
Action: Listens for events when an existing Wishlist item is updated.
Input:
$filter: Filter criteria to apply when listening for updated Wishlist items (optional).
Output: Returns the updated Wishlist item with its attributes.

onDeleteWishlist:
Operation: Subscription
Action: Listens for events when a Wishlist item is deleted.
Input:
$filter: Filter criteria to apply when listening for deleted Wishlist items (optional).
Output: Returns the deleted Wishlist item with its attributes.

These subscriptions are typically used in real-time scenarios to update the UI or trigger specific actions in response to changes in the Wishlist data.
