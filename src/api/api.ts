import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    // baseURL: process.env.REACT_APP_URL
    baseURL: 'http://localhost:5000/'
})

export const patientsAPI = {
    getUsers() {
        return instance.get<GetUsersResponseType>('patients')
    },
    getResearches(idPatient: number) {
        return instance.get<GetResearchesResponseType>(`patients/researches/${idPatient}`)
    },
    addPatient(patient: PostNewPatientType) {
        return instance.post<any>('patients', {patient})
    },
    addResearches(res: Array<PostNewResearches>) {
        return instance.post<any>('patients/researches', {res})
    },
}
export type PostNewResearches = {
    typeres: ResearchesType | null
    sizefilm: SizeFilmsType | null
    amount: number
    projections: number
    dose: number
    idpatient: number
}
export type PostNewPatientType = {
    name: string
    year: number | undefined
    sex: SexTypes
    address: string | null
}
export type GetUsersResponseType = {
    results: PatientType[]
    status: number
    statusText: string
}
export type PatientType = {
    id: number
    name: string
    birthyear: {
        years: number | null
    }
    sex: SexTypes
    address: string | null
    description: string | null
    conclusion: string | null
    dateres: Date
}
export type GetResearchesResponseType = {
    results: Array<ResearchType>
    status: number
    statusText: string
}
export type ResearchType = {
    idres: number
    typeres: ResearchesType
    sizefilm: SizeFilmsType
    amount: number
    projections: number
    dose: number
    idpatient: number
}
export type PostResearchType = {
    localId: string
    typeres: ResearchesType | null
    sizefilm: SizeFilmsType | null
    amount: number
    projections: number
    dose: number
    idpatient: number
}
export type AddPatientDataType = {
    name: string
    year: number
    sex: SexTypes
    address: string
}
export type SizeFilmsType = '35x35' | '18x43' | '24x30' | '30x40' | '13x18'
export type ResearchesType = "Т\\Б СУСТАВЫ" | 'ОГК' | 'ШОП' | 'ГОП' | 'ПОП' | 'ПКОП' | 'ЧЕРЕП' | 'ППН'
export type SexTypes = 'MAN' | 'WOMAN'