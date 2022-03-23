import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    // reducers
})

export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))

//all types action to all app
export type AppActionsType = any // actions type
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    rootReducerType,
    unknown,
    AppActionsType>

// @ts-ignore
window.store = store