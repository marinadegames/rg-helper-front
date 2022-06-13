import React, {useState} from "react";
import {SexTypes} from "../../api/api";
import s from "../add-patient/AddPatient.module.css";

type PropsType = {
    sex: SexTypes
    callback: (value: SexTypes) => void
}

export const EditableSpanSex = (props: PropsType) => {

    const [edit, setEdit] = useState(false)
    const [sex, setSex] = useState<SexTypes>(props.sex)

    const editOn = () => {
        setEdit(true)
    }
    const editOff = () => {
        setEdit(false)
        props.callback(sex)
    }
    const onChangeSex = (sex: SexTypes) => {
        setSex(sex)
    }

    return (
        edit
            ? <div className={s.add_patient_element} onBlur={editOff}>
                <div className={'mr-3'}>М</div>
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}
                       value={'MAN'}
                       onChange={() => onChangeSex('MAN')}
                />
                <div className={'mr-3'}>Ж</div>
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}
                       value={'WOMAN'}
                       onChange={() => onChangeSex('WOMAN')}
                />
            </div>

            : <div className='flex flex-row mr-10'>
                <label htmlFor="happy"
                       onClick={editOn}
                       className='cursor-pointer hover:font-bold'>{props.sex === 'WOMAN' ? 'ЖЕНСКИЙ' : 'МУЖСКОЙ'}</label>
            </div>

    )
}