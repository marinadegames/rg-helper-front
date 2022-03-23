import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {App} from "./App";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/state";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
