import s from './Search.module.css'
import {useDispatch, useSelector} from "react-redux";
import {PatientType, SearchPatientsAC} from "../../Redux/patientsReducer";
import {useState} from "react";
import {rootReducerType} from "../../Redux/state";
import {TablePatients} from "../tablePatient/TablePatients";


export const Search = () => {

    const result = useSelector<rootReducerType, PatientType[]>(state => state.patients.searchResult)
    const [value, setValue] = useState<string>('')
    const dispatch = useDispatch()
    console.log(result)
    const onChangeHandler = (e: string) => {
        setValue(e)
        dispatch(SearchPatientsAC(value))
    }

    return (
        <div className={s.search_container}>
            <div className={s.search_header}>
                Поиск пациентов
                <input className={'text-gray-700'} onChange={e => onChangeHandler(e.currentTarget.value)}/>
            </div>

            <div className={'w-full'}>
                <TablePatients patients={result}/>
            </div>
        </div>
    )
}