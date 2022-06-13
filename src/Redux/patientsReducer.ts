import {Dispatch} from "react";
import {patientsAPI, PatientType, PostNewPatientType, PostNewResearches, ResearchType} from "../api/api";
import {setErrorMessageTC, setSuccessfulMessageTC} from "./appReducer";

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
            return {...state, researches: [...state.researches, ...action.researches]}
        case "CLEAR_RES":
            return {...state, researches: []}
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
export const ClearResearchesAC = (): ClearResearchesAT => {
    return {type: "CLEAR_RES",}
}


export const GetPatientsTC = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await patientsAPI.getPatients()
        dispatch(GetPatientsAC(res.data.results))
    } catch {
        console.warn('ERROR get patients')
    } finally {

    }
}
export const ClearPatientsTC = () => async (dispatch: Dispatch<any>) => {
    try {
        dispatch(ClearResearchesAC())
    } catch {
        console.warn('ERROR get patients')
    } finally {

    }
}
export const AddPatientsTC = (patient: PostNewPatientType) => async (dispatch: Dispatch<any>) => {
    try {
        await patientsAPI.addPatient(patient)
        dispatch(setSuccessfulMessageTC('Пациент успешно добавлен!'))
    } catch {
        console.error('ERROR POST new patient')
        dispatch(setErrorMessageTC('Ошибка при добавлении пациента!'))
    } finally {

    }
}
export const AddNewResearchesTC = (researches: Array<PostNewResearches>) => async (dispatch: Dispatch<any>) => {
    try {
        await patientsAPI.addResearches(researches)
    } catch {
        console.error('ERROR POST new patient')
        dispatch(setErrorMessageTC('Ошибка при добавлении исследований пациента!'))
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
export const EditNamePatientTC = (idPatient: number, newName: string) => async (dispatch: Dispatch<any>) => {
    try {
        await patientsAPI.editNamePatient(idPatient, newName)
        dispatch(setSuccessfulMessageTC('Имя пациента успешно изменено!'))
        dispatch(GetPatientsTC())
    } catch {
        console.warn('ERROR: fail change patient name!')
        dispatch(setErrorMessageTC('Ошибка при изменении имени пациента :('))
    }
}


export type PatientsStateType = {
    patients: Array<PatientType>
    researches: Array<ResearchType>
    searchResult: Array<PatientType>
}

export type ActionType = GetPatientsAT | GetResearchesAT | ClearResearchesAT

export type GetPatientsAT = {
    type: 'GET_PATIENTS'
    patients: PatientType[]
}
export type GetResearchesAT = {
    type: 'GET_RES'
    researches: Array<ResearchType>
}
export type ClearResearchesAT = {
    type: 'CLEAR_RES'
}
