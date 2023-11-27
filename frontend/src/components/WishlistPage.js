import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { Button } from 'react-bootstrap';
import { Tooltip } from 'primereact/tooltip/tooltip.esm.js';
import { InputSwitch } from 'primereact/inputswitch/inputswitch.esm.js';
import { Toast } from 'primereact/toast/toast.esm.js';

import { generateClient } from 'aws-amplify/api';
import { getCurrentUser } from 'aws-amplify/auth';

import { listWishlists } from '../graphql/queries.js'
import * as mutations from '../graphql/mutations.js'; 

function WishlistPage() {

    const [wishLists, setWishLists] = useState([]);
    const [filters, setFilters] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toast = useRef(null);

    const initFilters = () => {
        setFilters({
            name: { value: null },
            store: { value: null },
            price: { value: null }
        });
    };

    const clearFilter = () => {
        initFilters();
    };

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const header = (
        <div style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h1 style={{ color: '#ffffff', margin: '0', flex: '1', fontSize: '24px', fontWeight: 'bold', textAlign: 'left' }}>My Wish List</h1>
            </div>
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

    const removeItemFromWishlist = async (itemId) => {
        try {
          const client = generateClient();
          const deletedItem = await client.graphql({
            query: mutations.deleteWishlist, 
            variables: { input: { id: itemId } } 
          });
      
          setWishLists((prevWishLists) =>
            prevWishLists.filter((item) => item.id !== itemId)
          );

          toast.current.show({ severity: 'success', summary: 'Success', detail: 'Item removed from Wishlist!', life: 3000 });

        } catch (error) {
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed remove item from Wishlist', life: 3000 });
            console.log('error', error);
        }
      };
      
      const RemoveWishlistTemplate = (rowData) => {
        return (
            <Button 
                style={{
                    backgroundColor: '#d9534f',  
                    color: 'white',
                    borderColor: '#d43f00', 
                    borderRadius: '5px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    padding: '8px 12px',
                    fontSize: '1em',
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                }} 
                onClick={() => removeItemFromWishlist(rowData.id)}
            >
                Remove
            </Button>
        );
    };

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
   
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #03514B,#000000, #03514B)',  minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
            <Toast ref={toast} />
            <Tooltip target=".export-buttons>button" position="bottom" />
            <DataTable value={wishLists}
                header={header}
                footer={footer}
                showGridlines
                tableStyle={{ width: '60rem' }}
                paginator rows={10}
                rowsPerPageOptions={[5, 10, 25, 50]}
                removableSort
                sortField="store" sortOrder={-1}
                selectionMode="single"
                selection={selectedProduct}
                onSelectionChange={(e) => setSelectedProduct(e.value)}
                onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}
            >
                <Column field="name" header="Product-Name" sortable />
                <Column field="itemType" header="Category" sortable />
                <Column header="Image" body={imageBodyTemplate} />
                <Column field="store" header="Website" sortable />
                <Column field="price" header="Price" sortable />
                <Column header="Link" body={urlBodyTemplate} />
                <Column header="" body={RemoveWishlistTemplate} />
            </DataTable>
        </div>
    );
}

export default WishlistPage;
