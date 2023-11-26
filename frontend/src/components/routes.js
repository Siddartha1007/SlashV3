import React from "react";
import HomePage from "./HomePage.js";
import Search from "./SearchForm.js";
import DataDisplay from "./DataDisplay.js";
import WishlistPage from "./WishlistPage.js"; 

export const routes = [
    {
        path: "/",
        name: "Home",
        element: <HomePage />,
    },
    {
        path: "/search",
        name: "Search",
        element: <Search />,
    },
    {
        path: "/data",
        name: "Data",
        element: <DataDisplay />,
    },
    {
        path: "/wishlist", 
        name: "Wishlist",
        element: <WishlistPage />,
    },
];
