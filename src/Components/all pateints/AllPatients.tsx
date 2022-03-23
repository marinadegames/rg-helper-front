import s from './AllPatients.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {PatientsStateType} from "../../Redux/patientsReducer";
import {TablePatients} from "./TablePatients";


export const AllPatients = () => {

    // filters
    const patients = useSelector<rootReducerType, PatientsStateType>(state => state.patients)


    // return
    return (
        <div className={s.all_patients}>
            <div className={s.filters}>FILTERS</div>
            <TablePatients patients={patients}/>
        </div>
    )
}