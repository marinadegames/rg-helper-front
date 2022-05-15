// init state
import {Dispatch} from "react";
import {TEMP_PATIENTS} from "./TEMPSTATE";
import {debug} from "util";

const PatientsState: PatientsStateType = {
    patients: TEMP_PATIENTS,
    searchResult: []
}

// reducer
export const patientsReducer = (state = PatientsState, action: ActionType): PatientsStateType => {
    switch (action.type) {
        case "ADD_PATIENT":
            return {...state, patients: [...state.patients, action.payload]}
        case "SEARCH_PATIENT":
            return {
                ...state, searchResult: [...state.patients].filter((item) =>
                    item.name.toLowerCase().includes(action.value.toLowerCase()))
            };
        case "EDIT_RES_TYPE_PATIENT":
            let copyRes = null
            let copyState = {...state}
            let copyPat = copyState.patients.find(pat => pat.id == action.idPat)
            if (copyPat) {
                copyRes = copyPat.researches.find(res => res.idRes === action.idRes)
                if (copyRes) {
                    copyRes.typeRes = action.value
                }
            }
            return copyState
        default:
            return state
    }
}

// AC
export const AddPatientsAC = (payload: PatientType): AddPatientAT => {
    return {type: "ADD_PATIENT", payload}
}

export const SearchPatientsAC = (value: string): SearchPatientAT => {
    return {type: "SEARCH_PATIENT", value}
}

export const EditResearchTypePatient = (value: string, idRes: string, idPat: number): EditResearchTypePatientAT => {
    return {type: "EDIT_RES_TYPE_PATIENT", value, idRes, idPat}
}

// TC
export const AddPatientTC = (payload: PatientType) => async (dispatch: Dispatch<any>) => {
    try {
        console.log(payload)
        await dispatch(AddPatientsAC(payload))
    } catch {
        console.warn('ERROR')
    } finally {
    }
}


// types
export type PatientsStateType = {
    patients: Array<PatientType>,
    searchResult: Array<PatientType>
}

export type PatientType = {
    id: number // id === xray page number
    name: string
    year: number
    sex: string
    address: string
    researches: Array<ResearchesType>
    description: string | null
    conclusion: string | null
    dateOfReceipt: Date
}
export type ResearchesType = {
    idRes: string
    typeRes: string
    sizeFilm: SizeType
    amount: number
    projections: number
    dose: number
}

export type SizeType = string
export type ActionType = AddPatientAT | SearchPatientAT | EditResearchTypePatientAT
export type AddPatientAT = {
    type: 'ADD_PATIENT'
    payload: PatientType
}
export type SearchPatientAT = {
    type: 'SEARCH_PATIENT'
    value: string
}

export type EditResearchTypePatientAT = {
    type: 'EDIT_RES_TYPE_PATIENT'
    idRes: string
    idPat: number
    value: string
}
