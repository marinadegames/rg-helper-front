import React, {memo, useState} from "react";
import {Popup} from "../popup/Popup";
import {PatientType} from "../../api/api";
import { timestampToDate } from "../../Utils/formatDate";

type PropsType = {
    patient: PatientType
}

export const PatientTableElement = memo(({patient}: PropsType) => {

    const [open, setOpen] = useState(false)
    const formatDate = timestampToDate(Date.parse(patient.dateres.toString()))

    return (
        <div
            className="table-row transition hover:bg-gray-600 cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            {open && <Popup patient={patient} open={open} setOpen={setOpen}/>}
            <div className="table-cell border border-gray-500 text-center py-3">{patient.id}</div>
            <div
                className="table-cell border border-gray-500 text-center py-3">{formatDate}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.name}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.birthyear.years}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.sex === 'MAN' ? 'М' : 'Ж'}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.address}</div>

            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                1 ТИП
            </div>
            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                2 ПЛЕНКА
            </div>
            <div className="flex flex-row table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                3 ДОЗА
            </div>

            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.description}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.conclusion}</div>
        </div>
    )
})