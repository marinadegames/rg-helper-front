// imports
import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";
import {AnalogClock} from "./AnalogClock";

// component
export const Clock = () => {

    const [date, setDate] = useState(new Date())
    const [mode, setMode] = useState(true)

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(intervalID)
    })

    // return
    return (
        <div onClick={() => setMode(!mode)}>
            {mode
                ? <DigitalClock date={date}/>
                : <AnalogClock date={date}/>
            }
        </div>
    )
}