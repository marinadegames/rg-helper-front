import React from 'react';
import s from './App.module.css';
import {Sidebar} from "./Components/sidebar/Sidebar";
import {AllPatients} from "./Components/all pateints/AllPatients";
import {Route, Routes} from 'react-router-dom';
import {AddPatient} from "./Components/add-patient/AddPatient";
import {Notification} from "./Components/universal components/Notification";
import {useSelector} from "react-redux";
import {rootReducerType} from "./Redux/state";


export const App = () => {
    const notificationMode = useSelector<rootReducerType, boolean>(state => state.app.notificationMode)
    const errorMessage = useSelector<rootReducerType, string>(state => state.app.error)


    return (
        <div className={s.App}>
            <Sidebar/>

            <Routes>
                <Route path='/patients' element={<AllPatients/>}/>
                <Route path='/add-patient' element={<AddPatient/>}/>
                <Route path='/*' element={<h1 style={{textAlign: 'center'}}>404 not found</h1>}/>
            </Routes>

            {notificationMode && <Notification message={errorMessage}/>}
        </div>
    );
}