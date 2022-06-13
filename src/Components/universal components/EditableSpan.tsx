import React, {ChangeEvent} from "react";
import {useState} from "react";

type PropsType = {
    title: string | number
    callback: (value: any) => void
}


export const EditableSpan = (props: PropsType) => {

    const [edit, setEdit] = useState(false)
    const [title, setTitle] = useState(props.title)

    const editOn = () => {
        setEdit(true)
    }
    const editOff = () => {
        setEdit(false)
        props.callback(title)
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <div className='flex flex-row'>
                <input onBlur={editOff}
                       onChange={(e) => onChangeTitle(e)}
                       value={title}
                       autoFocus
                       className='px-2 text-gray-800'
                />
            </div>

            : <div className='flex flex-row mr-10'>
                <label htmlFor="happy"
                       onClick={editOn}
                       className='cursor-pointer hover:font-bold'>{title}</label>
            </div>

    )
}