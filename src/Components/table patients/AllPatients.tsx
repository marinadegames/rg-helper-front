import s from './AllPatients.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {PatientsStateType} from "../../Redux/patientsReducer";


export const AllPatients = () => {

    const patients = useSelector<rootReducerType, PatientsStateType>(state => state.patients)

    const formatDate = (date: Date) => {
        let day = date.getDay().toString()
        let month = date.getMonth().toString()
        let year = date.getFullYear()
        if (date.getDay() < 10) day = '0' + date.getDay()
        if (date.getMonth() < 10) month = '0' + date.getMonth()
        return `${day}.${month}.${year}`
    }

    // const formatXrayFilms = (xrayFilms: any) => {
    //     console.log(xrayFilms)
    //     return
    // }


    return (
        <div className={s.all_patients}>
            <div className={s.filters}>FILTERS</div>

            {/*    TABLE    */}

            <div className="table w-full ...">
                <div className="table-header-group ...">
                    <div className="table-row">
                        <div className="table-cell text-left ...">Номер</div>
                        <div className="table-cell text-left ...">Дата</div>
                        <div className="table-cell text-left ...">ФИО</div>
                        <div className="table-cell text-left ...">Год</div>
                        <div className="table-cell text-left ...">Пол</div>
                        <div className="table-cell text-left ...">Адрес</div>
                        <div className="table-cell text-left ...">Пленка</div>
                        <div className="table-cell text-left ...">Доза</div>
                        <div className="table-cell text-left ...">Описание</div>
                        <div className="table-cell text-left ...">Заключение</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {patients.map(pat => {
                        return (
                            <div key={pat.id} className="table-row">
                                <div className="table-cell">{pat.id}</div>
                                <div className="table-cell">{formatDate(pat.dateOfReceipt)}</div>
                                <div className="table-cell">{pat.name}</div>
                                <div className="table-cell">{pat.year}</div>
                                <div className="table-cell">{pat.sex}</div>
                                <div className="table-cell">{pat.adress}</div>
                                <div className="table-cell">
                                    {pat.xrayFilms.map(f => {
                                        return (
                                            <div>{f.size}/{f.amount}/{f.projections}</div>
                                        )
                                    })}
                                </div>
                                <div className="table-cell">{pat.dose} мЗв</div>
                                <div className="table-cell">{pat.description}</div>
                                <div className="table-cell">{pat.conclusion}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}