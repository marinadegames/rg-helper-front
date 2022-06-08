import {Dispatch} from "react";
import {patientsAPI, PatientType} from "../api/api";

const PatientsState: PatientsStateType = {
    patients: [],
    searchResult: []
}

export const patientsReducer = (state = PatientsState, action: ActionType): PatientsStateType => {
    switch (action.type) {

        default:
            return state
    }
}

export const GetPatientsAC = (): GetPatientsAT => {
    return {type: "GET_PATIENTS"}
}
export const GetPatientsTC = () => async (dispatch: Dispatch<any>) => {
    try {
        const result = await patientsAPI.getUsers()
        console.log(result)
        dispatch(GetPatientsAC)
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
}
