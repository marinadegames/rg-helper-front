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
    // deleteUser(userId: string) {
    //     return instance.delete<GetUsersResponseType>(`${userId}`)
    // },
    // addUser(user: UserTypePost) {
    //     return instance.post<AddUserResponseType>('db', {
    //         name: user.name,
    //         bio: user.bio,
    //         birth: user.birth,
    //         email: user.email,
    //         covid: user.covid,
    //     })
    // },
    // editUser(user: UserType) {
    //     return instance.put<EditUserResponseType>(`db/${user.id}`, {user})
    // }
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
    sex: sexTypes
    address: string | null
    resid: Array<number | null>
    description: string | null
    conclusion: string | null
    dateres: Date
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
export type SizeFilmsType = '35x35' | '18x43' | '24x30' | '30x40' | '13x18'
export type ResearchesType = 'Т/Б СУСТАВЫ' | 'ОГК' | 'ШОП' | 'ГОП' | 'ПОП' | 'ПКОП' | 'ЧЕРЕП' | 'ППН'
export type sexTypes = 'MAN' | 'WOMAN'