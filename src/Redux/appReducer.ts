// import
import {Dispatch} from "react";

// init state

const appState: AppReducerType = {
    error: '',
    errorMode: false,
    successful: '',
    successfulMode: false
}

// reducer
export const appReducer = (state = appState, action: ActionType): AppReducerType => {
    switch (action.type) {
        case "SET_ERROR":
            return {...state, error: action.message}
        case "SET_ERROR_MODE":
            return {...state, errorMode: action.mode}
        case "SET_SUCCESSFUL":
            return {...state, successful: action.message}
        case "SET_SUCCESSFUL_MODE":
            return {...state, successfulMode: action.mode}
        default:
            return state
    }
}

// AC
export const setErrorMessage = (message: string) => ({type: "SET_ERROR", message} as const)
export const setNotificationMode = (mode: boolean) => ({type: "SET_ERROR_MODE", mode} as const)
export const setSuccessfulMessage = (message: string) => ({type: "SET_SUCCESSFUL", message} as const)
export const setSuccessfulMode = (mode: boolean) => ({type: "SET_SUCCESSFUL_MODE", mode} as const)

// TC
export const setErrorMessageTC = (message: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessage(message))
    dispatch(setNotificationMode(true))
    await setTimeout(() => {
        dispatch(setNotificationMode(false))
    }, 5000)
}
export const setSuccessfulMessageTC = (message: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setSuccessfulMessage(message))
    dispatch(setSuccessfulMode(true))
    await setTimeout(() => {
        dispatch(setSuccessfulMode(false))
    }, 5000)
}


// types
type AppReducerType = {
    error: string
    errorMode: boolean
    successful: string
    successfulMode: boolean
}
type ActionType =
    | ReturnType<typeof setErrorMessage>
    | ReturnType<typeof setNotificationMode>
    | ReturnType<typeof setSuccessfulMessage>
    | ReturnType<typeof setSuccessfulMode>