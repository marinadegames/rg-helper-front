import React from "react";
import s from './Header.module.css'
import {Button} from "../universal components/Button";

export function Header() {
    return (
        <header className={s.header}>
            <h1>Rg-helper</h1>
            <Button title={'Add patient'}/>
        </header>
    );
}