import s from './AllPatients.module.css'
import {TablePatients} from "../tablePatient/TablePatients";
import {useEffect} from "react";
import {GetPatientsTC} from "../../Redux/patientsReducer";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {PatientType} from "../../api/api";


export const AllPatients = () => {

    const patients = useSelector<rootReducerType, Array<PatientType>>(state => state.patients.patients)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPatientsTC())
    }, [dispatch])

    return (
        <div className={s.all_patients}>
            <div className={s.header_patient_list}>
                Список пациентов
                <input type={"date"} className='text-gray-700 flex justify-center items-center px-2 rounded'/>
            </div>
            <TablePatients patients={patients}/>
        </div>
    )
}