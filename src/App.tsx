import React from 'react';
import s from './App.module.css';
import {Sidebar} from "./Components/sidebar/Sidebar";
import {AllPatients} from "./Components/table patients/AllPatients";


export const App = () => {
    return (
        <div className={s.App}>
            <Sidebar/>
            <AllPatients/>
        </div>
    );
}