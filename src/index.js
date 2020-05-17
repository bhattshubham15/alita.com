import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
);

serviceWorker.register();
