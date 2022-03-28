// import
import {Dispatch} from "react";

// init state

const appState: AppReducerType = {
    error: 'ERROR TEST',
    notificationMode: true
}

// reducer
export const appReducer = (state = appState, action: ActionType): AppReducerType => {
    switch (action.type) {
        case "SET_ERROR": return {...state, error: action.message}
        default:
            return state
    }
}

// AC
export const setErrorMessage = (message: string) => ({type: "SET_ERROR", message} as const)
export const setNotificationMode = (mode: boolean) => ({type: "SET_NOTIFICATION_MODE", mode} as const)

// TC
export const setErrorMessageTC = (message: string) => (dispatch: Dispatch<any>) => {
    dispatch(setErrorMessage(message))
    dispatch(setNotificationMode(true))
    setTimeout(() => {
        dispatch(setNotificationMode(false))
    }, 2000)
}


// types
type AppReducerType = {
    error: string
    notificationMode: boolean
}
type ActionType = ReturnType<typeof setErrorMessage>