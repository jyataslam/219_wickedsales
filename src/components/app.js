import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import ProductRoutes from './products';
import { Route, Switch } from 'react-router-dom';
import Home from './products/home';
import Nav from './nav';
import NotFound from './404';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/products" component={ProductRoutes} />
                <Route path="/not-found" component={NotFound} />
            </Switch>
        </div>
    </div>
);

export default App;
