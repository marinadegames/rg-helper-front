import s from './AddPatient.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";


export const AddPatient = () => {

    const nextId = useSelector<rootReducerType, number>(state => state.patients.length)

    return (
        <div className={s.add_patients}>
            <div className={s.header_add_patients}>Добавление нового пациента:</div>

            {/* ID */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Номер снимка:</div>
                <div className={s.name_field}>{nextId + 1}</div>
            </div>

            {/* NAME */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>ФИО:</div>
                <input className={s.input_add_pat} placeholder={'ИМЯ'}/>
            </div>

            {/* YEAR */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Год:</div>
                <input className={s.input_add_pat} placeholder={'ГОД'}/>
            </div>

        {/*    SEX  */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Пол:</div>
                М
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}/>
                Ж
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}/>
            </div>

        </div>
    )
}