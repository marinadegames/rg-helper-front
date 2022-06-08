import s from './AllPatients.module.css'
import {TablePatients} from "../tablePatient/TablePatients";
import {useEffect} from "react";
import {GetPatientsTC} from "../../Redux/patientsReducer";


export const AllPatients = () => {

    const patients = null

    useEffect(() => {
        GetPatientsTC()
    }, [])

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