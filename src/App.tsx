import React from 'react';
import s from './App.module.css';
import {Sidebar} from "./Components/sidebar/Sidebar";
import {AllPatients} from "./Components/all pateints/AllPatients";
import {Route, Routes} from 'react-router-dom';
import {AddPatient} from "./Components/add-patient/AddPatient";
import {Notification} from "./Components/universal components/Notification";
import {useSelector} from "react-redux";
import {rootReducerType} from "./Redux/state";
import {Search} from "./Components/search/Search";


export const App = () => {
    const errorMode = useSelector<rootReducerType, boolean>(state => state.app.errorMode)
    const errorMessage = useSelector<rootReducerType, string>(state => state.app.error)
    const successfulMessage = useSelector<rootReducerType, string>(state => state.app.successful)
    const successfulMode = useSelector<rootReducerType, boolean>(state => state.app.successfulMode)


    return (
        <div className={s.App}>
            <Sidebar/>

            <Routes>
                <Route path='/patients' element={<AllPatients/>}/>
                <Route path='/add-patient' element={<AddPatient/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/*' element={<h1 style={{textAlign: 'center'}}>404 not found</h1>}/>
            </Routes>

            {errorMode && <Notification typeMessage={'error'} message={errorMessage}/>}
            {successfulMode && <Notification typeMessage={'successful'} message={successfulMessage}/>}
        </div>
    );
}