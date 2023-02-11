import React, {useEffect, useState} from 'react';
import {SERVER_URL} from "../constants";
import {DataGrid} from '@mui/x-data-grid';
import Snackbar from '@mui/material/Snackbar';
import AddCar from "./AddCar";
import EditCar from "./EditCar";

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
            field: '_links.car.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
                <EditCar data={row} updateCar={updateCar}/>
        },
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
    const addCar = (car) => {
        fetch(SERVER_URL + '/api/vehicles',
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(car)
            })
            .then(response => {
                if (response.ok) fetchCars();
                else alert('Something went wrong!');
            })
            .catch(err => console.error(err))
    }
    const updateCar = (car, link) => {
        fetch(link,
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(car)
            })
            .then(response => {
                if (response.ok) fetchCars();
                else alert('Something went wrong!');
            })
            .catch(err => console.error(err))
    }
    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <React.Fragment>
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
            <AddCar addCar={addCar}/>
        </React.Fragment>
    );
}

export default CarList;
