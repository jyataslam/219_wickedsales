import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import ProductRoutes from './products';
import { Route } from 'react-router-dom';
import Home from './products/home';
import Nav from './nav';

const App = () => (
    <div>
        <Nav/>
        <Route path="/" component={Home} exact />
        <Route path="/products" component={ProductRoutes}/>
    </div>
);

export default App;
