import React, {useState} from "react";
import {Button} from "../universal components/Button";
import {PatientType} from "../../api/api";


type PropsType = {
    patient: PatientType
    value: string | null
    callback: (value: string | null, patientId: number) => void
}

export const TextAreaComponent = ({patient, value, callback}: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [textAreaValue, setTextAreaValue] = useState<string | null>(value)

    const changeEditMode = () => {
        setEditMode(!editMode)
    }
    const textAreaHandler = (e: string) => {
        setTextAreaValue(e)
    }
    const save = () => {
        setEditMode(!editMode)
        callback(textAreaValue, patient.id)
    }

    return (
        <>
            {!editMode
                ? <div className={'pb-6 w-1/2 cursor-pointer hover:font-bold'}
                       onClick={changeEditMode}>
                    {value? value : 'НЕ ОПИСАНО'}
                </div>
                : <>
                    <textarea className={'text-white mt-3 w-1/2 p-3 pb-6 rounded-md bg-gray-700'}
                    value={textAreaValue ? textAreaValue : ''}
                    onChange={(e) => textAreaHandler(e.currentTarget.value)}>
                        {value}
                    </textarea>
                    <Button customStyle={'w-1/12 h-10 my-5'}
                            title={'Сохранить'}
                            onClick={save}
                    />
                </>}
        </>
    )
}