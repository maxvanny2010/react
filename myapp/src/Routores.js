import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import RoutoresContact from "./RoutoresContact";
import RoutoresHome from "./RoutoresHome";
import './App.css';
import RoutoresPageNotFound from "./RoutoresPageNotFound";
import RoutoresContactLondon from "./RoutoresContactLondon";
import RoutoresContactParis from "./RoutoresContactParis";
import RoutoresFallContact from "./RoutoresFallContact";

function Routores() {
    return (
        <div className="App">
            <BrowserRouter>
                <nav>
                    <Link to="/">Home</Link>{' '}
                    <Link to="/contact">Contact</Link>{' '}
                    <Link to="/contact/london">London</Link>{' '}
                </nav>
                <Routes>
                    <Route path="/" element={<RoutoresHome/>}/>
                    <Route path="contact" element={<RoutoresContact/>}/>
                    <Route path="*" element={<RoutoresPageNotFound/>}/>
                </Routes>
                <Routes>
                    <Route path="fall" element={<RoutoresFallContact/>}>
                        <Route path="london" element={<RoutoresContactLondon/>}/>
                        <Route path="paris" element={<RoutoresContactParis/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routores;