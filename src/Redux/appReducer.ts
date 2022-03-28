// import
import {Dispatch} from "react";

// init state

const appState: AppReducerType = {
    error: 'ERROR TEST',
    notificationMode: false
}

// reducer
export const appReducer = (state = appState, action: ActionType): AppReducerType => {
    switch (action.type) {
        case "SET_ERROR":
            return {...state, error: action.message}
        case "SET_NOTIFICATION_MODE":
            return {...state, notificationMode: action.mode}
        default:
            return state
    }
}

// AC
export const setErrorMessage = (message: string) => ({type: "SET_ERROR", message} as const)
export const setNotificationMode = (mode: boolean) => ({type: "SET_NOTIFICATION_MODE", mode} as const)

// TC
export const setErrorMessageTC = (message: string) => async (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessage(message))
    dispatch(setNotificationMode(true))
    await setTimeout(() => {
        dispatch(setNotificationMode(false))
    }, 5000)
}


// types
type AppReducerType = {
    error: string
    notificationMode: boolean
}
type ActionType = ReturnType<typeof setErrorMessage> | ReturnType<typeof setNotificationMode>