import s from './AllPatients.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {PatientType} from "../../Redux/patientsReducer";
import {TablePatients} from "../tablePatient/TablePatients";


export const AllPatients = () => {

    // filters
    const patients = useSelector<rootReducerType, PatientType[]>(state => state.patients.patients)


    // return
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