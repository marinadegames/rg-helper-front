import {PatientType} from "../../Redux/patientsReducer";
import {formatDate} from "../../Utils/formatDate";

type PropsType = {
    patients: PatientType[]
}

export const TablePatients = (props: PropsType) => {

    return (
        <div className="table w-full table bg-gray-800 rounded-md p-3 ">
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Номер</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Дата</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">ФИО</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Год</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Пол</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Адрес</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Тип</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Пленка</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Доза</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Описание</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Заключение
                    </div>
                </div>
            </div>
            <div className="table-row-group">
                {props.patients.map(pat => {
                    return (
                        <div key={pat.id} className="table-row transition hover:bg-gray-600 cursor-pointer">
                            <div className="table-cell border border-gray-500 text-center py-3">{pat.id}</div>
                            <div
                                className="table-cell border border-gray-500 text-center py-3">{formatDate(pat.dateOfReceipt)}</div>
                            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{pat.name}</div>
                            <div className="table-cell border border-gray-500 text-center py-3">{pat.year}</div>
                            <div className="table-cell border border-gray-500 text-center py-3">{pat.sex}</div>
                            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{pat.adress}</div>

                            {pat.researches.map(res => {
                                return (
                                    <>
                                        <div
                                            className="table-cell border border-gray-500 text-left pl-3 py-3">{res.typeRes}</div>
                                        <div className="table-cell border border-gray-500 text-center py-3">
                                            <div>{res.sizeFilm}/{res.amount}/{res.projections}</div>
                                        </div>
                                        <div className="table-cell border border-gray-500 text-center py-3">{res.dose} мЗв</div>
                                    </>
                                )
                            })}

                            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{pat.description}</div>
                            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{pat.conclusion}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}