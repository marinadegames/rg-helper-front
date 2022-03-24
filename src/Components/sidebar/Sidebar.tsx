import React from "react";
import s from './Sidebar.module.css'
import {Button} from "../universal components/Button";
import {MenuItem} from "../menuItem/MenuItem";
import {NavLink} from "react-router-dom";

export function Sidebar() {
    return (
        <header className={s.Sidebar}>
            <div className={s.sidebar_container}>
                <h1>☢️Rg-helper</h1>
            </div>

            <NavLink to={'/add-patient'}>
                <Button title={'Новый пациент'} style={'h-10 w-full'}/>
            </NavLink>

            <hr className={s.horizontalLine}/>

            Меню:
            <div>
                <NavLink to={'/patients'}>
                    <MenuItem title={'Все пациенты'} icon={''}/>
                </NavLink>

                <MenuItem title={'Настройки'} icon={''}/>
                <MenuItem title={'Выход'} icon={''}/>
            </div>
        </header>
    );
}