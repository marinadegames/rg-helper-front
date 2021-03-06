import {PatientTableElement} from "../patientTableElement/PatientTableElement";
import {PatientType} from "../../api/api";
import {memo} from "react";

type PropsType = {
    patients: PatientType[]
}

export const TablePatients = memo(({patients}: PropsType) => {

    return (
        <div className="table w-full table bg-gray-800 rounded-md p-3 ">
            <div className="table-header-group">
                <div className="table-row">
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">№</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Дата</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">ФИО</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Год</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Пол</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Адрес</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Тип</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Пленка <br/>(р | кол | пр)</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Доза, мЗв</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Описание</div>
                    <div className="table-cell border border-gray-500 text-center text-lg font-bold py-3">Заключение
                    </div>
                </div>
            </div>
            <div className="table-row-group">

                {patients && patients.map((pat, index) => {
                    return (
                        <PatientTableElement patient={pat} key={index}/>
                    )
                })}
            </div>
        </div>
    )
})