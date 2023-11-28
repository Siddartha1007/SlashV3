# About SlashV3's SearchForm.js file 
The SearchForm.js file is a React component that defines a search form using the react-bootstrap library. It allows users to input an item name and select a website (Amazon, Walmart, Costco, BestBuy, or All) from dropdown options. Upon submission, the entered data is used to fetch information from the server using the DataFetch function, and the user is then navigated to the /data route with the fetched data.

# Location of Code file
(https://github.com/Siddartha1007/SlashV3/blob/main/frontend/src/components/SearchForm.js)

# File Description
tate Hooks:

selectedWebsite: Manages the selected website from the dropdown.
searchItem: Manages the entered item name.
searchWeb: Manages the selected website for searching.
Dropdown Selection Handling:

The handleWebsiteSelect function is called when a dropdown item is clicked, updating the selectedWebsite and searchWeb states.
Form Submission:

The HandleSubmission function is triggered when the "Search" button is clicked.
It calls the DataFetch function with the entered item name and selected website.
The result is then passed to the /data route using the navigate function from react-router-dom.
Rendered JSX:

The component renders a form using the InputGroup, FormControl, DropdownButton, and Button components from react-bootstrap.
The item name input and website dropdown are contained within the InputGroup.
The "Search" button triggers the HandleSubmission function.
Dropdown Options:

Dropdown options include specific websites (Amazon, Walmart, Costco, BestBuy) and an "All" option.

Hence, this component provides a user-friendly interface for searching items on different websites and demonstrates the use of React state and the react-bootstrap library for styling.
