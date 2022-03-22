import React from "react";
import s from './Sidebar.module.css'
import {Button} from "../universal components/Button";

export function Sidebar() {
    return (
        <header className={s.Sidebar}>
            <div className={s.sidebar_container}>
                <h1>☢️Rg-helper</h1>
                <Button title={'Add patient'}/>
            </div>

            Menu:
            <div>
                <div className={s.Sidebar_menu_item}>
                    Patients
                </div>
                <div className={s.Sidebar_menu_item}>
                    Settings
                </div>
                <div className={s.Sidebar_menu_item}>
                    Doctors
                </div>
                <div className={s.Sidebar_menu_item}>
                    Database
                </div>
            </div>
        </header>
    );
}