import s from "../all pateints/AllPatients.module.css";
import {useEffect, useState} from "react";
import axios from "axios";

type UserType = {
    id: string,
    name: string
}

export const Settings = () => {

    const [users, setUsers] = useState<UserType[]>([])

    useEffect(() => {
        axios.get('http://localhost:7500/users')
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(() => {
                console.error('ERROR!')
            })
    }, [])

    return (
        <div className={s.all_patients}>
            <div className={s.header_patient_list}>
                Настройки
            </div>
            {users.map((u) => {
                return <div>{u.name}</div>
            })}

        </div>
    )
}