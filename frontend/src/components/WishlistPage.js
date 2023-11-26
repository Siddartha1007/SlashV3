import React from 'react';
import { useState, useEffect } from 'react';

import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'

import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

import { listWishlists } from '../graphql/queries.js'

function WishlistPage() {

    const [wishLists, setWishLists] = useState([]);

    useEffect(() => {
        const fetchWishListItems = async () => {
            try {
                const { userId } = await getCurrentUser();
                console.log("userId",userId)
                const client = generateClient();
                const response = await client.graphql({ 
                    query: listWishlists, 
                    variables: { filter: { userID: { eq: userId }}}
                });
                console.log("wishlist response",response)
                setWishLists(response.data.listWishlists.items);
            } catch (error) {
                console.error("Error fetching wishlist items:", error);
            }
        };

        fetchWishListItems();
    }, []);

    const header = (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <h1 style={{ margin: '0' }}>My Wishlist</h1>
        </div>
    );


    const footer = (
        <div>
            <p>Table End</p>
        </div>
    );
    const imageBodyTemplate = (rowData) => {
        const imageUrl = rowData.itemImageURl;
        return <img src={imageUrl} alt={rowData.name} style={{ width: '100px', height: '100px' }} />;
    };

    const urlBodyTemplate = (rowData) => {
        const linkUrl = "https://" + rowData.itemURl;
        return <a href={linkUrl} target="_blank" rel="noopener noreferrer" >Link</a>;

    };

   
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DataTable value={wishLists}
                header={header}
                footer={footer}
                showGridlines
                tableStyle={{ width: '60rem' }}
                paginator rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
            >
                <Column field="name" header="Product-Name" sortable />
                <Column field="itemType" header="Category" sortable />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="store" header="Website" sortable />
                <Column field="price" header="Price" sortable />
                <Column header="Link" body={urlBodyTemplate} />
            </DataTable>
        </div>
    );
}

export default WishlistPage;
