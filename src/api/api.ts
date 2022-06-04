import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rg-helper-back.herokuapp.com/',
    // baseURL: 'http://localhost:5000/',
})

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersResponseType>('db')
    },
    deleteUser(userId: string) {
        return instance.delete<any>('')
    }
}


export type GetUsersResponseType = {
    status: number
    results: UserType[]
}
// export type ResultsType<T> = {
//     results: {
//
//     }
// }

export type UserType = {
    id: number,
    name: string
}
