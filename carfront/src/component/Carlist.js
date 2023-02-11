import React, {useEffect, useState} from 'react';
import {SERVER_URL} from "../constants";
import {DataGrid} from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';

function CarList() {
    const [open, setOpen] = useState(false);
    const [cars, setCars] = useState([]);
    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
        {
            field: '_links.self.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <button onClick={() => onDelClick(row.id)}>Delete</button>
        }
    ];
    const fetchCars = () =>
        fetch(SERVER_URL + '/api/vehicles')
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(err => console.error(err));

    const onDelClick = (url) => {
        if (window.confirm("Are you sure to delete?")) {
            fetch(url, {method: 'DELETE'})
                .then(response => {
                    if (response.ok) {
                        fetchCars();
                        setOpen(true);
                    } else {
                        alert('Something went wrong!');
                    }
                })
                .catch(err => console.error(err))
        }
    }

    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <div style={{height: 500, width: '100%'}}>
            <DataGrid
                rows={cars}
                columns={columns}
                disableSelectionOnClick={true}
                getRowId={row => row._links.self.href}/>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={() => setOpen(false)}
                message="Car deleted"/>
        </div>

    );
}

export default CarList;
