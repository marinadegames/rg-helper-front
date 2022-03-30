import Popup from "../popup/Popup";
import {formatDate} from "../../Utils/formatDate";
import {PatientType} from "../../Redux/patientsReducer";
import {useState} from "react";
import React from "react";

type PropsType = {
    patient: PatientType
}

export const PatientTableElement = ({patient}: PropsType) => {

    const [open, setOpen] = useState(false)

    return (
        <div
            className="table-row transition hover:bg-gray-600 cursor-pointer"
            onClick={() => setOpen(!open)}

        >
            {open && <Popup patient={patient} open={open} setOpen={setOpen}/>}
            <div className="table-cell border border-gray-500 text-center py-3">{patient.id}</div>
            <div
                className="table-cell border border-gray-500 text-center py-3">{formatDate(patient.dateOfReceipt)}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.name}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.year}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.sex}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.adress}</div>

            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                {patient.researches.map(typeRes => {
                    return (<p key={typeRes.idRes}>{typeRes.typeRes}</p>)
                })}
            </div>
            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                {patient.researches.map(films => {
                    return (<p key={films.idRes}>{films.sizeFilm}/{films.amount}/{films.projections}</p>)
                })}
            </div>
            <div className="flex flex-row table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                <div>
                    {patient.researches.map(dose => {
                        return <p key={dose.idRes}>{dose.dose} мЗв</p>
                    })}
                </div>
                {patient.researches.length > 1 && <div>
                    Суммарно: {patient.researches.reduce((a: any, b: any) => a.dose + b.dose)} мЗв
                </div>}
            </div>

            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.description}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.conclusion}</div>
        </div>
    )
}