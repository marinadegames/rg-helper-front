import {PatientsStateType} from "../../Redux/patientsReducer";

type PropsType = {
    patients: PatientsStateType
}

export const TablePatients = (props: PropsType) => {

    const formatDate = (date: Date) => {
        let day = date.getDay().toString()
        let month = date.getMonth().toString()
        let year = date.getFullYear()
        if (date.getDay() < 10) day = '0' + date.getDay()
        if (date.getMonth() < 10) month = '0' + date.getMonth()
        return `${day}.${month}.${year}`
    }

    return (
        <div className="table w-full table bg-gray-800 rounded-md p-3 ">
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell text-lg font-bold text-left pb-7">Номер</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Дата</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">ФИО</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Год</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Пол</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Адрес</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Тип</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Пленка</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Доза</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Описание</div>
                    <div className="table-cell text-lg font-bold text-left pb-7">Заключение</div>
                </div>
            </div>
            <div className="table-row-group">
                {props.patients.map(pat => {
                    return (
                        <div key={pat.id} className="table-row transition hover:bg-gray-600 cursor-pointer">
                            <div className="table-cell py-3 ">{pat.id}</div>
                            <div className="table-cell py-3 ">{formatDate(pat.dateOfReceipt)}</div>
                            <div className="table-cell py-3 ">{pat.name}</div>
                            <div className="table-cell py-3 ">{pat.year}</div>
                            <div className="table-cell py-3 ">{pat.sex}</div>
                            <div className="table-cell py-3 ">{pat.adress}</div>
                            <div className="table-cell py-3 ">{pat.typeResearch}</div>
                            <div className="table-cell py-3 ">
                                {pat.xrayFilms.map(f => {
                                    return (
                                        <div key={f.amount}>{f.size}/{f.amount}/{f.projections}</div>
                                    )
                                })}
                            </div>
                            <div className="table-cell py-3">{pat.dose} мЗв</div>
                            <div className="table-cell py-3">{pat.description}</div>
                            <div className="table-cell py-3">{pat.conclusion}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}