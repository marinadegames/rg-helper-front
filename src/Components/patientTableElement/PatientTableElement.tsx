import React, {memo, useEffect, useState} from "react";
import {Popup} from "../popup/Popup";
import {PatientType, ResearchType} from "../../api/api";
import {timestampToDate} from "../../Utils/formatDate";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {ClearPatientsTC, GetResearchesTC} from "../../Redux/patientsReducer";

type PropsType = {
    patient: PatientType
}

export const PatientTableElement = memo(({patient}: PropsType) => {

    const [open, setOpen] = useState<boolean>(false)
    const formatDate = timestampToDate(Date.parse(patient.dateres.toString()))
    const researches = useSelector<rootReducerType, Array<ResearchType>>(state => state.patients.researches)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetResearchesTC(patient.id))
        return () => {
            dispatch(ClearPatientsTC())
        }
    }, [dispatch, patient.id])

    const researchesTarget = researches.filter(res => res.idpatient === patient.id && res)

    return (
        <div className={`table-row transition hover:bg-gray-600 cursor-pointer bg-opacity-50 ${patient.description ? 'bg-green-800 ' :'bg-red-900'}`} onClick={() => setOpen(!open)}>
            {open && <Popup patient={patient} open={open} setOpen={setOpen} researches={researchesTarget}/>}
            <div className="table-cell border border-gray-500 text-center py-3">{patient.id}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{formatDate}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.name}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.birthyear.years}</div>
            <div className="table-cell border border-gray-500 text-center py-3">{patient.sex === 'MAN' ? 'М' : 'Ж'}</div>
            <div className="table-cell border border-gray-500 text-left pl-3 py-3">{patient.address}</div>

            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                {researches.map((res, index) => res.idpatient === patient.id && <div key={index}>{res.typeres}</div>)}
            </div>
            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                {researches.map((res, index) => res.idpatient === patient.id
                    && <div key={index}>{res.sizefilm} | {res.amount} | {res.projections}</div>
                )}
            </div>
            <div className=" flex flex-row table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                {researches.map((res, index) => res.idpatient === patient.id && <div key={index}>{res.dose}</div>)}
            </div>

            <div className="w-1/6 table-cell box-content border border-gray-500 text-left pl-3 py-3">{patient.description}</div>
            <div className="w-1/6 table-cell border border-gray-500 text-left pl-3 py-3">{patient.conclusion}</div>
        </div>
    )
})