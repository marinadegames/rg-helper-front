import Popup from "../popup/Popup";
import {formatDate} from "../../Utils/formatDate";
import {PatientType} from "../../Redux/patientsReducer";
import {useState} from "react";
import React from "react";

type PropsType = {
    patient: PatientType
}

export const PatientTableElement = (props: PropsType) => {

    const [popupMode, setPopupMode] = useState<boolean>(false)

    const openPopup = () => {
        setPopupMode(true)
    }
    const closePopup = () => {
        setPopupMode(false)
    }

    return (
        <div
            className="table-row transition hover:bg-gray-600 cursor-pointer"
            onClick={openPopup}

        >
            {popupMode && <Popup patient={props.patient} closePopup={closePopup}/>}
            <div className="table-cell border border-gray-500 text-center py-3">{props.patient.id}</div>
            <div
                className="table-cell border border-gray-500 text-center py-3">{formatDate(props.patient.dateOfReceipt)}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{props.patient.name}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{props.patient.year}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{props.patient.sex}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{props.patient.adress}</div>

            {props.patient.researches.map(res => {
                return (
                    <React.Fragment key={res.idRes}>
                        <div
                            className="table-cell border border-gray-500 text-left pl-3 py-3">{res.typeRes}</div>
                        <div className="table-cell border border-gray-500 text-center py-3">
                            <div>{res.sizeFilm}/{res.amount}/{res.projections}</div>
                        </div>
                        <div className="table-cell border border-gray-500 text-center py-3">{res.dose} мЗв</div>
                    </React.Fragment>
                )
            })}

            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{props.patient.description}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{props.patient.conclusion}</div>
        </div>
    )
}