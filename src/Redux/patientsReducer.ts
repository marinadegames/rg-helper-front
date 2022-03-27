// import

// types


export type PatientsStateType = Array<PatientType>
export type PatientType = {
    id: number // id === xray page number
    name: string
    year: number
    sex: 'М' | 'Ж'
    adress: string
    researches: Array<ResearchesType>
    dose: number
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
}

export type SizeType = string
export type ActionType = AddPatientAT
export type AddPatientAT = {
    type: 'ADD_ACTION_TYPE'
    payload: PatientType
}
// init state
const PatientsState: PatientsStateType = [
    {
        id: 1,
        name: "Пашкевич Е.В",
        year: 1997,
        sex: 'М',
        adress: 'Пупкина 11-11',
        researches: [
            {
                idRes: 'werewrwer1234123413',
                typeRes: 'ОГК',
                sizeFilm: '35x35',
                amount: 1,
                projections: 1
            }
        ],
        dose: 0.18,
        description: null,
        conclusion: null,
        dateOfReceipt: new Date(2022, 3, 23),
    },
    {
        id: 2,
        name: "Иванов И.И",
        year: 2001,
        sex: 'М',
        adress: 'ул. Фронтендерская 99-99',
        researches: [
            {
                idRes: 'ewfwegwegwe',
                typeRes: 'ОГК',
                sizeFilm: '35x35',
                amount: 1,
                projections: 1
            }
        ],
        dose: 0.32,
        description: null,
        conclusion: null,
        dateOfReceipt: new Date(2022, 3, 23),
    }
]


// reducer
export const patientsReducer = (state = PatientsState, action: ActionType): PatientsStateType => {
    switch (action.type) {
        case "ADD_ACTION_TYPE":
            return [...state, action.payload]
        default:
            return state
    }
}

// AC
export const AddPatientsAC = (OBJECT: PatientType): AddPatientAT => {
    return {type: "ADD_ACTION_TYPE", payload: OBJECT}
}

// TC