import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import Stock from '../pages/Stock';
import stockData from '../pages/stock-data';

function Main(props) {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    path="/stocks/:symbol"
                    render={(props) => <Stock stockData={stockData} {...props} />}
                />
                <Route path="/about" component={About} />
                <Route
                    path="/stocks"
                    render={(props) => <Dashboard {...props} stockData={stockData} />}
                />
            </Switch>
        </main>
    )
}
export default Main;
