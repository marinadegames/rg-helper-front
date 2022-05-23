// imports
import React, {useEffect, useState} from "react";
import {DigitalClock} from "./DigitalClock";

// component
export const Clock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(intervalID)
    })

    // return
    return (
        <div>
            <DigitalClock date={date}/>
        </div>
    )
}