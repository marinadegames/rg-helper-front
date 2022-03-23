// imports
import {AddPatientsAC, patientsReducer, PatientsStateType, PatientType} from "./patientsReducer";

// initial state
let startState: PatientsStateType
beforeEach(() => {
    startState = [
        {
            id: 1,
            name: "Пашкевич Е.В",
            year: 1997,
            sex: 'М',
            adress: 'Пупкина 11-11',
            xrayFilms: [{size: '35x35', amount: 1}],
            dose: 0.18,
            description: null,
            conclusion: null,
            dateOfReceipt: new Date(2022, 3, 23),
        },
    ]
})


// tests

test('ADD PATIENT', () => {
    const newPatient:PatientType = {
        id: 2,
        name: "Иванов И.И",
        year: 2001,
        sex: 'М',
        adress: 'ул. Фронтендерская 99-99',
        xrayFilms: [{size: '35x35', amount: 2}],
        dose: 0.32,
        description: null,
        conclusion: null,
        dateOfReceipt: new Date(2022, 3, 23),
    }
    const action = AddPatientsAC(newPatient)
    const endState = patientsReducer(startState, action)
    expect(endState.length).toBe(2)
    expect(endState[1].id).toBe(2)
    expect(endState[1].name).toBe("Иванов И.И")
})