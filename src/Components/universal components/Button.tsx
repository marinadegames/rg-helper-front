import React from "react";
import s from './Button.module.css'

type PropsType = {
    title: string
    icon?: any
    callback?: () => void
    customStyle?: string
    onClick?: any
}



export const Button = (props: PropsType) => {
    return (
        <button className={`${s.buttonCustom} ${props.customStyle}`}
                onSubmit={e => e.preventDefault()}
                onClick={props.onClick}>
            {props.icon}
            {props.title}
        </button>
    )
}