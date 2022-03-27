// imports
import s from './Counter.module.css'

// types

import {useState} from "react";

type PropsType = {

}

// component
export const Counter = (props: PropsType) => {

    const [num, setNum] = useState<number>(0)

    const increment = () => {
        setNum(num + 1)
    }

    const decrement = () => {
        if (num >= 1) {
            setNum(num - 1)
        }

    }

    return (
        <div className={s.counter_container}>

            <button className={s.btn_counter}
                    disabled={num < 1}
                    onClick={decrement}>
                -
            </button>
            <b>{num}</b>
            <button className={s.btn_counter}
                    onClick={increment}>
                +
            </button>
        </div>
    )
}