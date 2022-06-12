import {Dispatch} from "react";
import {patientsAPI, PatientType, PostNewPatientType, PostNewResearches, ResearchType} from "../api/api";

const PatientsState: PatientsStateType = {
    patients: [],
    researches: [],
    searchResult: []
}

export const patientsReducer = (state = PatientsState, action: ActionType): PatientsStateType => {
    switch (action.type) {
        case "GET_PATIENTS":
            return {...state, patients: action.patients}
        case "GET_RES":
            if (action.researches.length === 0) return {...state, researches: action.researches}
            return {...state, researches: [...state.researches, ...action.researches]}
        default:
            return state
    }
}

export const GetPatientsAC = (patients: Array<PatientType>): GetPatientsAT => {
    return {type: "GET_PATIENTS", patients}
}
export const GetResearchesAC = (researches: Array<ResearchType>): GetResearchesAT => {
    return {type: "GET_RES", researches}
}


export const GetPatientsTC = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await patientsAPI.getUsers()
        dispatch(GetPatientsAC(res.data.results))
    } catch {
        console.warn('ERROR get patients')
    } finally {

    }
}
export const AddPatientsTC = (patient: PostNewPatientType) => async (dispatch: Dispatch<any>) => {
    try {
        await patientsAPI.addPatient(patient)
        dispatch(GetPatientsTC())
    } catch {
        console.error('ERROR POST new patient')
    } finally {

    }
}
export const AddNewResearchesTC = (researches: Array<PostNewResearches>) => async () => {
    try {
        await patientsAPI.addResearches(researches)
    } catch {
        console.warn('ERROR POST new patient')
    } finally {

    }
}

export const GetResearchesTC = (idPatient: number) => async (dispatch: Dispatch<any>) => {
    try {
        const res = await patientsAPI.getResearches(idPatient)
        dispatch(GetResearchesAC(res.data.results))
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

export type PatientsStateType = {
    patients: Array<PatientType>,
    researches: Array<ResearchType>
    searchResult: Array<PatientType>
}

export type ActionType = GetPatientsAT | GetResearchesAT

export type GetPatientsAT = {
    type: 'GET_PATIENTS'
    patients: PatientType[]
}
export type GetResearchesAT = {
    type: 'GET_RES'
    researches: Array<ResearchType>
}
