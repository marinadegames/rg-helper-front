import axios from "axios";

const instance = axios.create({
    withCredentials: false,
    // baseURL: process.env.REACT_APP_URL
    baseURL: 'http://localhost:5000/'
})

export const usersAPI = {
    getUsers() {
        return instance.get<GetUsersResponseType>('db')
    },
    deleteUser(userId: string) {
        return instance.delete<GetUsersResponseType>(`${userId}`)
    },
    addUser(user: UserTypePost) {
        return instance.post<AddUserResponseType>('db', {
            name: user.name,
            bio: user.bio,
            birth: user.birth,
            email: user.email,
            covid: user.covid,
        })
    },
    editUser(user: UserType) {
        return instance.put<EditUserResponseType>(`db/${user.id}`, {user})
    }
}

export type EditUserResponseType = {
    status: number,
    data: {
        results: UserType[]
    }
}

export type GetUsersResponseType = {
    status: number
    results: UserType[]
}
export type AddUserResponseType = {
    status: number
    data: {
        item: UserType
    }
}

export type UserTypePost = {
    name: string
    email: string | null
    bio: string | null
    birth: string | null
    covid: boolean | null
}

export type UserType = {
    id: string
    name: string
    email: string | null
    bio: string | null
    birth: string | null
    covid: boolean | null
}
