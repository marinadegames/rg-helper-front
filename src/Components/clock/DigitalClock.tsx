// imports
import React from "react";

type PropsType = {
    date: Date
}

// component
export const DigitalClock = (props: PropsType) => {

    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num
    const secondsString = getTwoDigitsString(props.date.getSeconds())
    const minutesString = getTwoDigitsString(props.date.getMinutes())
    const hoursString = getTwoDigitsString(props.date.getHours())

    return (
        <div>
            <span>{hoursString}</span>
            :
            <span>{minutesString}</span>
            :
            <span>{secondsString}</span>
        </div>
    )
}