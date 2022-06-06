import s from "../all pateints/AllPatients.module.css";
import {KeyboardEvent, useCallback, useEffect, useState} from "react";
import {Button} from "../universal components/Button";
import {usersAPI, UserType, UserTypePost} from "../../api/api";
import {UserTest} from "./UserTest";

export const Settings = () => {
    const [users, setUsers] = useState<any>([])
    const [inputName, setInputName] = useState<string>('')

    const changeInputHandler = (value: string) => {
        setInputName(value)
    }
    const getUsers = () => {
        usersAPI.getUsers()
            .then(res => {
                setUsers(res.data.results)
            }).catch(() => {
            console.error('ERROR get users!')
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const addPatient = () => {
        let newUser: UserTypePost = {
            name: inputName,
            email: null,
            bio: null,
            birth: null,
            covid: null
        }
        usersAPI.addUser(newUser)
            .then(res => {
                console.log(res)
                getUsers()
            })
            .catch((err) => {
                console.error(err)
                console.error('ERROR post!')
            })
            .finally(() => {
                setInputName('')
            })
    }

    const deletePatient = useCallback((patientId: string) => {
        usersAPI.deleteUser(patientId)
            .then(res => {
                console.log(res)
                getUsers()
            })
            .catch((err) => {
                console.log(err)
                console.error('ERROR patient delete!')
            })
    }, [])

    const editUser = useCallback((user: UserType) => {
        usersAPI.editUser(user)
            .then(() => {
                getUsers()
            })
            .catch((err) => {
                console.log(err)
                console.error('ERROR edit USER!')
            })
    }, [])

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
            {users.map((u: UserType) => {
                let now;
                let utc;
                if (u.birth !== null) {
                    now = new Date(u.birth);
                    utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
                } else {
                    utc = null
                }
                return (
                    <UserTest deletePatient={deletePatient}
                              editUser={editUser}
                              utc={utc}
                              user={u}
                              key={u.id}/>
                )
            })}

        </div>
    )
}