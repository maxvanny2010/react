import React, {useEffect, useState} from 'react';
import {SERVER_URL} from "../constants";
import { DataGrid } from '@mui/x-data-grid';

function CarList() {
    const [cars, setCars] = useState([]);
    const columns = [
        {field: 'brand', headerName: 'Brand', width: 200},
        {field: 'model', headerName: 'Model', width: 200},
        {field: 'color', headerName: 'Color', width: 200},
        {field: 'year', headerName: 'Year', width: 150},
        {field: 'price', headerName: 'Price', width: 150},
    ];
    useEffect(() => {
        fetch(SERVER_URL + '/api/vehicles')
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(err => console.error(err));
    }, []);
    return(
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
                rows={cars}
                columns={columns}
                getRowId={row => row._links.self.href}/>
        </div>
    );
}

export default CarList;
