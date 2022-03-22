import React from 'react';
import s from './App.module.css';
import {Sidebar} from "./Components/sidebar/Sidebar";


export const App = () => {
    return (
        <div className={s.App}>
            <Sidebar/>
        </div>
    );
}