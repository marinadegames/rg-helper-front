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

            {patient.researches.map(res => {
                return (
                    <React.Fragment key={res.idRes}>
                        <div
                            className="table-cell border border-gray-500 text-left pl-3 py-3">
                            {/*{res.typeRes}*/}
                        </div>
                        <div className="table-cell border border-gray-500 text-center py-3">
                            <div>
                                {/*{res.sizeFilm}/{res.amount}/{res.projections}*/}
                            </div>
                        </div>
                        <div className="table-cell border border-gray-500 text-center py-3">
                            {/*{res.dose} мЗв*/}
                        </div>
                    </React.Fragment>
                )
            })}

            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.description}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.conclusion}</div>
        </div>
    )
}