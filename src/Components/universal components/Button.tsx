import React from "react";
import s from './Button.module.css'

type PropsType = {
    title: string
    icon?: ImageData
    callback?: () => void
}

export const Button = (props: PropsType) => {
    return (
        <button className={s.button}>
            {props.icon}
            {props.title}
        </button>
    )
}