import React from "react";
import s from './MenuItem.module.css'

type PropsType = {
    title: string
    icon: any
    style?: string
}

export const MenuItem = (props: PropsType) => {
    return (
        <div className={`${s.menu_item} ${props.style}`}>
            {props.icon}
            {props.title}
        </div>
    )
}