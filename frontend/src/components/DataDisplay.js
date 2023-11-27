import React, { useRef, useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "primeicons/primeicons.css";
import { Tooltip } from 'primereact/tooltip/tooltip.esm.js';
import { InputSwitch } from 'primereact/inputswitch/inputswitch.esm.js';
import { Toast } from 'primereact/toast/toast.esm.js';


import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import { createWishlist } from '../graphql/mutations.js'

import { v4 as uuid } from 'uuid'

function DataDisplay() {
    const location = useLocation();

    const [filters, setFilters] = useState(null);
    const [metaKey, setMetaKey] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const dt = useRef(null);

    const data = location.state ? location.state.response : null;
    const navigate = useNavigate();
    const toast = useRef(null);

    const HandleSubmission = async () => {
        try {
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddToWishlist = async (item) => {
        try {
            const { userId } = await getCurrentUser();

            const wishlistItem = {
                id: uuid(),
                userID: userId,
                name: item.name,
                itemtype: item.itemType,
                itemURl: item.itemURL,
                itemImageURl: item.itemImageURl,
                price: item.price,
                store: item.store
            };

            const client = generateClient();
            const result = await client.graphql({
                query: createWishlist,
                variables: {
                    input: wishlistItem
                }
            });

            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Item added to Wishlist!', life: 3000 });

        } catch (err) {
            console.log('error', err);
            toast.current.show({ severity: 'error', summary: 'Error', detail: 'Failed to add item to Wishlist', life: 3000 });
        }
    };

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

    const wishlistBodyTemplate = (rowData) => {
        return (
            <Button
                style={{
                    backgroundColor: '#5cb85c',
                    color: 'white',
                    borderColor: '#4cae4c',
                    borderRadius: '5px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    padding: '8px 12px',
                    fontSize: '1em',
                    transition: 'background-color 0.3s, box-shadow 0.3s',
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#449d44'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#5cb85c'}
                onClick={() => handleAddToWishlist(rowData)}
            >
                <i className="pi pi-plus" style={{ marginRight: '5px' }}></i> {/* Icon */}
                Add to Wishlist
            </Button>
        );
    };


    useEffect(() => {
        if (data === null || (Array.isArray(data) && data.length === 0)) {
            window.alert('Data couldn\'t be found in the database.');
            navigate('/')
        }
    }, [data, navigate]);

    if (data === null) {
        return null;
    }


    const header = (
        <div style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', padding: '15px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                <h1 style={{ color: '#ffffff', margin: '0', flex: '1', fontSize: '24px', fontWeight: 'bold', textAlign: 'left' }}>Product List</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div className="custom-button" onClick={HandleSubmission}>
                        <span style={{ color: '#4db8ff' }}>Back to Search</span>
                    </div>
                    <div className="p-button-rounded custom-button" onClick={() => exportCSV(false)}>
                        <i className="pi pi-file-excel" style={{ fontSize: '1.2em', color: '#4db8ff' }}></i>
                        <span style={{ marginLeft: '5px', color: '#4db8ff' }}>Export to CSV</span>
                    </div>
                    <div className="custom-button" onClick={clearFilter}>
                        <span style={{ color: '#4db8ff' }}>Clear All Filters</span>
                    </div>

                    <InputSwitch inputId="input-metakey" checked={metaKey} onChange={(e) => setMetaKey(e.value)} />
                    <label htmlFor="input-metakey" style={{ color: '#ffffff' }}>MetaKey</label>
                </div>
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

    const onRowSelect = (event) => {
        toast.current.show({ severity: 'info', summary: 'Product Selected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const onRowUnselect = (event) => {
        toast.current.show({ severity: 'warn', summary: 'Product Unselected', detail: `Name: ${event.data.name}`, life: 3000 });
    };

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    return (
        <div style={{ background: 'linear-gradient(to bottom right, #03514B,#000000, #03514B)', display: 'flex', justifyContent: 'center' }}>
            <Toast ref={toast} />
            <Tooltip target=".export-buttons>button" position="bottom" />
            {data && data.length > 0 ? (
                <DataTable ref={dt} value={data}
                    header={header}
                    footer={footer}
                    showGridlines
                    tableStyle={{ width: '80rem' }}
                    paginator rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    stripedRows stripedColor="#808080"
                    removableSort
                    sortField="store" sortOrder={-1}

                    selectionMode="single"
                    selection={selectedProduct}
                    onSelectionChange={(e) => setSelectedProduct(e.value)}
                    metaKeySelection={metaKey}
                    onRowSelect={onRowSelect} onRowUnselect={onRowUnselect}
                >
                    <Column field="name" header="Product-Name" filter filterPlaceholder="Search by name" sortable />
                    <Column field="itemType" header="Category" filter filterPlaceholder="Search by category" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="store" header="Website" filter filterPlaceholder="Search by store" sortable />
                    <Column field="price" header="Price" filter filterPlaceholder="Search by price" sortable />
                    <Column header="Link" body={urlBodyTemplate} />
                    <Column header="Wishlist" body={wishlistBodyTemplate} />
                </DataTable>
            ) : (
                <div>Sorry, couldn't find that item to compare.</div>
            )}
        </div>
    );
};
export default DataDisplay;