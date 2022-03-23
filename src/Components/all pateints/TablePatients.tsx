import {PatientsStateType} from "../../Redux/patientsReducer";

type PropsType = {
    patients: PatientsStateType
}

export const TablePatients = (props: PropsType)=> {

    const formatDate = (date: Date) => {
        let day = date.getDay().toString()
        let month = date.getMonth().toString()
        let year = date.getFullYear()
        if (date.getDay() < 10) day = '0' + date.getDay()
        if (date.getMonth() < 10) month = '0' + date.getMonth()
        return `${day}.${month}.${year}`
    }

    return (
        <div className="table w-full bg-gray-800">
            <div className="table-header-group ...">
                <div className="table-row">
                    <div className="table-cell text-left ...">Номер</div>
                    <div className="table-cell text-left ...">Дата</div>
                    <div className="table-cell text-left ...">ФИО</div>
                    <div className="table-cell text-left ...">Год</div>
                    <div className="table-cell text-left ...">Пол</div>
                    <div className="table-cell text-left ...">Адрес</div>
                    <div className="table-cell text-left ...">Тип</div>
                    <div className="table-cell text-left ...">Пленка</div>
                    <div className="table-cell text-left ...">Доза</div>
                    <div className="table-cell text-left ...">Описание</div>
                    <div className="table-cell text-left ...">Заключение</div>
                </div>
            </div>
            <div className="table-row-group">
                {props.patients.map(pat => {
                    return (
                        <div key={pat.id} className="table-row">
                            <div className="table-cell">{pat.id}</div>
                            <div className="table-cell">{formatDate(pat.dateOfReceipt)}</div>
                            <div className="table-cell">{pat.name}</div>
                            <div className="table-cell">{pat.year}</div>
                            <div className="table-cell">{pat.sex}</div>
                            <div className="table-cell">{pat.adress}</div>
                            <div className="table-cell">{pat.typeResearch}</div>
                            <div className="table-cell">
                                {pat.xrayFilms.map(f => {
                                    console.log(f)
                                    return (
                                        <div key={f.amount}>{f.size}/{f.amount}/{f.projections}</div>
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
    )
}