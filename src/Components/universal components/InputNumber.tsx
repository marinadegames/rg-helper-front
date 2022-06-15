import React, {useState} from "react";

type PropsType = {
    value: number
    id: number
    callback: (doseValue: number, id: number) => void
}

export const InputNumber = ({value, callback, id}: PropsType) => {

    const [initValue, setInitValue] = useState<number>(value)

    const changeValue = (e: number) => {
        if (e > 0){
            setInitValue(e)
            callback(e, id)
        }
        if (e < 0){
            setInitValue(0)
            callback(e, id)
        }
    }


    return (
        <input name={'dose'}
               type={'number'}
               value={initValue}
               step={0.01}
               onChange={(e) => changeValue(e.currentTarget.valueAsNumber)}
               className={'text-xl bg-white-700 rounded-lg text-black p-2 mb-2'}/>
    )
}