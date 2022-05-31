// imports
import {AddPatientsAC, patientsReducer, PatientsStateType, PatientType} from "./patientsReducer";

// initial state
let startState: PatientsStateType
beforeEach(() => {

    startState = {
        patients: [
            {
                id: 1,
                name: "Пашкевич Е.В",
                year: 1997,
                sex: 'М',
                address: 'Пупкина 11-11',
                researches: [],
                description: null,
                conclusion: null,
                dateOfReceipt: new Date(2022, 3, 23),
            },
        ],
        searchResult: []
    }

})


// tests

test('ADD PATIENT', () => {
    const newName = "Иванов И.И"
    const newPatient: PatientType = {
        id: 2,
        name: newName,
        year: 2001,
        sex: 'М',
        address: 'ул. Фронтендерская 99-99',
        researches: [
            {
                idRes: 'ewfwegwegwe',
                typeRes: 'ОГК',
                sizeFilm: '35x35',
                amount: 1,
                projections: 1,
                dose: 0.18,
            }
        ],
        description: null,
        conclusion: null,
        dateOfReceipt: new Date(2022, 3, 23),
    }
    const action = AddPatientsAC(newPatient)
    const endState = patientsReducer(startState, action)
    expect(endState.patients.length).toBe(2)
    expect(endState.patients[1].id).toBe(2)
    expect(endState.patients[1].name).toBe(newName)
})