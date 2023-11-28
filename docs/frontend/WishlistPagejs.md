# About SlashV3's WishlistPage.js file 
The WishlistPage.js file defines a React component for displaying the user's wishlist. It utilizes the primereact library for rendering a DataTable with various columns and features. The component fetches the wishlist items associated with the currently logged-in user and provides functionality to remove items from the wishlist.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/components/WishlistPage.js)

# File Description
Functional Component:

The WishlistPage component is a functional component that uses the useState and useEffect hooks.
Wishlist Fetching:

The useEffect hook is used to fetch the user's wishlist items when the component mounts.
It calls the listWishlists GraphQL query to retrieve wishlist items associated with the current user.
DataTable:

The DataTable component from the primereact library is used to display wishlist items in a tabular format.
Columns include "Product-Name," "Category," "Image," "Website," "Price," "Link," and a custom column for removing items from the wishlist.
Column Templates:

Custom column templates (imageBodyTemplate, urlBodyTemplate, RemoveWishlistTemplate) are defined for rendering images, links, and a "Remove" button in the corresponding columns.
Remove Item from Wishlist:

The removeItemFromWishlist function is called when the "Remove" button is clicked. It removes the selected item from the wishlist using the deleteWishlist GraphQL mutation.
The setWishLists function is used to update the local state and remove the item from the displayed wishlist.
Toasts and Tooltips:

The Toast and Tooltip components from primereact are used to display success/error messages and tooltips, respectively.
Styling:

Styling is applied using inline styles and Bootstrap classes.

Hence, this component provides a user-friendly interface for managing and viewing the wishlist, including the ability to remove items.

Snapshot for add product into wishlist :


https://github.com/Siddartha1007/SlashV3/assets/74051253/5d962f22-0153-43d3-97db-d0f41f73333c


Snapshot for removing product from wishlist : 


https://github.com/Siddartha1007/SlashV3/assets/74051253/785a0082-cbf3-44a7-90e4-404a2adbff42




