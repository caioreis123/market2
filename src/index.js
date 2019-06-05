/* This is the top page in the hierarchy. Here we wrap the App component with the Router and Context APIs */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'typeface-roboto';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { MyProvider } from './Context'

ReactDOM.render(
    <MyProvider>
        <Router>
            <App />
        </Router>
    </MyProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
