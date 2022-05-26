import s from "../all pateints/AllPatients.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../universal components/Button";
import {Input} from "postcss";
import {EditableSpan} from "../universal components/EditableSpan";

type UserType = {
    id: string,
    name: string
}

export const Settings = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [inputName, setInputName] = useState<string>('')

    const changeInputHandler = (value: string) => {
        setInputName(value)
    }

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
        axios.post('http://localhost:7500/users', {name: inputName})
            .then(res => {
                console.log(res)
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
            <input value={inputName}
                   style={{color: 'black', height: '40px', padding: '8px', width: '270px', margin: '0 0 20px 0'}}
                   placeholder={'add name'}
                   onChange={(e) => changeInputHandler(e.currentTarget.value)}/>
            <Button onClick={addPatient} title={'add patient'}/>
            {users.map((u) => {
                return <div key={u.id}>{u.name}</div>
            })}

        </div>
    )
}