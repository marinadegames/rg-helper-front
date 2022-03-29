import {PatientType} from "../../Redux/patientsReducer";
import {PatientTableElement} from "../patientTableElement/PatientTableElement";

type PropsType = {
    patients: PatientType[]
}

export const TablePatients = ({patients}: PropsType) => {

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

                {patients.map(pat => {
                    return (
                        <PatientTableElement patient={pat} key={pat.id}/>
                    )
                })}
            </div>
        </div>
    )
}