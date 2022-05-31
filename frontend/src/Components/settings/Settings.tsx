import s from "../all pateints/AllPatients.module.css";
import {KeyboardEvent, useEffect, useState} from "react";
import axios from "axios";
import {Button} from "../universal components/Button";

type UserType = {
    _id: string,
    name: string
}

export const Settings = () => {

    const [users, setUsers] = useState<UserType[]>([])
    const [inputName, setInputName] = useState<string>('')

    const changeInputHandler = (value: string) => {
        setInputName(value)
    }

    const getUsers = () => {
        axios.get('http://localhost:7500/users' + window.location.search)
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
                setInputName('')
            })
            .catch(() => {
                console.error('ERROR post!')
            })
    }

    const deletePatient = (_id: string) => {
        axios.delete(`http://localhost:7500/users/${_id}`)
            .then(res => {
                console.log(res)
                getUsers()
            })
            .catch(() => {
                console.error('ERROR patient delete!')
            })
    }

    const updateUser = (id: string, name: string) => {
        axios.put('http://localhost:7500/users', {name, id})
            .then(() => {
                getUsers()
            }).catch(() => {
            console.error('ERROR get users!')
        })
    }

    const enterInputHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addPatient()
            setInputName('')
        }
    }

    return (
        <div className={s.all_patients}>
            <div className={s.header_patient_list}>
                Настройки
            </div>
            <input value={inputName}
                   style={{color: 'black', height: '40px', padding: '8px', width: '270px', margin: '0 0 20px 0'}}
                   placeholder={'add name'}
                   onKeyPress={(e) => enterInputHandler(e)}
                   onChange={(e) => changeInputHandler(e.currentTarget.value)}/>
            <Button onClick={addPatient} title={'add patient'}/>
            {users.map((u) => {
                return <div style={
                    {
                        display: 'flex',
                        margin: '5px 0',
                        fontSize: '20px',

                    }} key={u._id}>
                    <input defaultValue={u.name}
                           style={{color: "black"}}
                           onBlur={(e) => updateUser(u._id, e.currentTarget.value)}/>
                    <button style={{border: '1px solid white', width: '40px', margin: '0 0 0 10px'}}
                            onClick={() => deletePatient(u._id)}>X
                    </button>
                </div>
            })}

        </div>
    )
}