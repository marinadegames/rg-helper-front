import {Dispatch} from "react";
import {patientsAPI, PatientType} from "../api/api";

const PatientsState: PatientsStateType = {
    patients: [],
    searchResult: []
}

export const patientsReducer = (state = PatientsState, action: ActionType): PatientsStateType => {
    switch (action.type) {
        case "GET_PATIENTS":
            // return state
            return {...state, patients: action.patients}
        default:
            return state
    }
}

export const GetPatientsAC = (patients: Array<PatientType>): GetPatientsAT => {
    return {type: "GET_PATIENTS", patients}
}
export const GetPatientsTC = () => async (dispatch: Dispatch<any>) => {
    try {
        const res = await patientsAPI.getUsers()
        dispatch(GetPatientsAC(res.data.results))
    } catch {
        console.warn('ERROR')
    } finally {

    }
}

export type PatientsStateType = {
    patients: Array<PatientType>,
    searchResult: Array<PatientType>
}

export type ActionType = GetPatientsAT

export type GetPatientsAT = {
    type: 'GET_PATIENTS'
    patients: PatientType[]
}
