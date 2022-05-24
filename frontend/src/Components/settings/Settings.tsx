import s from "../all pateints/AllPatients.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../universal components/Button";

type UserType = {
    id: string,
    name: string
}

export const Settings = () => {

    const [users, setUsers] = useState<UserType[]>([])

    const getUsers = () => {
        axios.get('http://localhost:7500/users')
            .then(res => {
                setUsers(res.data)
            }).catch(() => {
            console.error('ERROR get users!')
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const addPatient = () => {
        axios.post('http://localhost:7500/users')
            .then(res => {
                getUsers()
            })
            .catch(() => {
                console.error('ERROR post!')
            })
    }

    return (
        <div className={s.all_patients}>
            <div className={s.header_patient_list}>
                Настройки
            </div>
            <Button onClick={addPatient} title={'add patient'}/>
            {users.map((u) => {
                return <div key={u.id}>{u.name}</div>
            })}

        </div>
    )
}