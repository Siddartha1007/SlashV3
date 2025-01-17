# About SlashV3's DataDisplay.js file 
DataDisplay.js file is a React component that displays a DataTable using the PrimeReact library. It is a part of web application for displaying and comparing product data.

# Location of Code file
https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/components/DataDisplay.js

# File Description
Imports:

The component imports various React components, PrimeReact DataTable components, styles, and utility functions.
Component Functionality:

The component uses state hooks (useState) for managing filters, metaKey state, and the selected product.
The useLocation hook is used to get the current location, and the useNavigate hook is used for programmatic navigation.
The useEffect hook checks if data is available; if not, it displays an alert and navigates back to the search page.
The Toast component from PrimeReact is used for displaying success or error messages.
Event Handling:

The HandleSubmission function is used for navigating back to the search page.
The handleAddToWishlist function is an asynchronous function that adds a selected item to the user's wishlist. It uses AWS Amplify API functions for mutations and displays a toast message accordingly.
DataTable Configuration:

The DataTable component is configured with various columns representing different properties of the product data.
Columns include product name, category, image, website, price, link, and an "Add to Wishlist" button.
The table supports pagination, sorting, and selection of rows.
Column Body Templates:

Custom body templates are defined for the "Image," "Link," and "Wishlist" columns to customize the content and behavior of these columns.
Header and Footer:

The component includes a custom-styled header with the product list title, buttons for navigation, and export to CSV. The header also includes a MetaKey switch for multi-selection.
The footer is a simple placeholder.
Styling:

The component uses custom styles, and the background is styled with a linear gradient.
Conditional Rendering:

The component conditionally renders the DataTable if data is available; otherwise, it displays a message indicating that the item couldn't be found for comparison.

Hence, DataDisplay.js is a React component that provides a user interface for displaying and comparing product data, allowing users to add selected products to their wishlist and navigate back to the search page. The component leverages the PrimeReact library for DataTable functionality and AWS Amplify for managing user wishlists.


Snapshot for Pagination


https://github.com/Siddartha1007/SlashV3/assets/78747526/ab922a63-8a84-40d7-ab3d-b4fb989b150b



Snapshot for Presort


https://github.com/Siddartha1007/SlashV3/assets/78747526/d26f3fde-ba26-449e-a6b5-4f4b93b975ee




Snapshot for Filter



https://github.com/Siddartha1007/SlashV3/assets/78747526/f0b6403e-da42-423d-a863-8d1c56839b08



Snapshot for export to csv


https://github.com/Siddartha1007/SlashV3/assets/78747526/72bd5795-dec7-4e2d-8cb2-453ca78e6f03



Snapshot for Selecting and Deselecting Rows


https://github.com/Siddartha1007/SlashV3/assets/78747526/91d17bd8-a3e0-4378-b963-b97ce09a9bd0






