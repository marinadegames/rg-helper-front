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
    resid: number | null
    description: string | null
    conclusion: string | null
    dateres: Date
}
export type sexTypes = 'MAN' | 'WOMAN'