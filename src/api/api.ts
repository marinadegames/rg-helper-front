import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    // baseURL: "http://localhost:5000"
    baseURL: 'https://rg-helper-back.herokuapp.com/'
})

export const patientsAPI = {
    getPatients() {
        return instance.get<GetPatientsResponseType>('patients')
    },
    getResearches(idPatient: number) {
        return instance.get<GetResearchesResponseType>(`patients/researches/${idPatient}`)
    },
    getAllResearches() {
        return instance.get<ResponseType>(`patients/researches`)
    },
    addPatient(patient: PostNewPatientType) {
        return instance.post<ResponseType>('patients', patient)
    },
    addResearches(res: Array<PostNewResearches>) {
        return instance.post<ResponseType>('patients/researches', {res})
    },

    editNamePatient(id: number, name: string) {
        return instance.put<ResponseType>(`patients/${id}/changeName`, {name})
    },
    editYearPatient(id: number, year: number) {
        return instance.put<ResponseType>(`patients/${id}/changeYear`, {year})
    },
    editSexPatient(id: number, sex: SexTypes) {
        return instance.put<ResponseType>(`patients/${id}/changeSex`, {sex})
    },
    editAddressPatient(id: number, address: string) {
        return instance.put<ResponseType>(`patients/${id}/changeAddress`, {address})
    },
    editResearchesPatient(idPat: number, allResearches: Array<ResearchType>) {
        return instance.put<ResponseType>(`patients/researches/${idPat}`, {allResearches})
    }
}
export type ResponseType = {
    status: number
    statusText: string
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
    year: number
    sex: SexTypes
    address: string | null
}
export type GetPatientsResponseType = {
    results: PatientType[]
    status: number
    statusText: string
}
export type PatientType = {
    id: number
    name: string
    birthyear: {
        years: number
    }
    sex: SexTypes
    address: string
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
export type ResearchesType = "??-?? ??????????????" | '??????' | '??????' | '??????' | '??????' | '????????' | '??????????' | '??????'
export type SexTypes = 'MAN' | 'WOMAN'