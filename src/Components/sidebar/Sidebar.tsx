import React from "react";
import s from './Sidebar.module.css'
import {Button} from "../universal components/Button";
import {MenuItem} from "../menuItem/MenuItem";

export function Sidebar() {
    return (
        <header className={s.Sidebar}>
            <div className={s.sidebar_container}>
                <h1>☢️Rg-helper</h1>
            </div>
            <Button title={'Новый пациент'} style={'h-10'}/>

            <hr className={s.horizontalLine}/>

            Меню:
            <div>
                <MenuItem title={'Все пациенты'} icon={''}/>
                <MenuItem title={'Настройки'} icon={''}/>
                <MenuItem title={'Выход'}
                          icon={''}/>
            </div>
        </header>
    );
}