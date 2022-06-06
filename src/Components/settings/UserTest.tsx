import style from "./Settings.module.css";
import {UserType} from "../../api/api";
import {useEffect, useState} from "react";

type PropsType = {
    utc: Date | null
    user: UserType
    deletePatient: (patientId: string) => void
    editUser: (user: UserType) => void
}

export const UserTest = ({utc, user, deletePatient, editUser,}: PropsType) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    const [name, setName] = useState<string>('')
    const [bio, setBio] = useState<string | null>('')
    const [covid, setCovid] = useState<boolean | null>(false)
    const [email, setEmail] = useState<string | null>('')

    useEffect(() => {
        setName(user.name)
        setBio(user.bio)
        setCovid(user.covid !== null)
        setEmail(user.email)
    }, [user])

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    const changeInputName = (e: string) => {
        setName(e)
    }
    const changeInputBio = (e: string) => {
        setBio(e)
    }
    const changeInputEmail = (e: string) => {
        setEmail(e)
    }
    const changeCovid = () => {
        setCovid(!covid)
    }

    const saveUser = () => {

        let updatedUser: UserType = {
            id: user.id,
            name: name,
            covid: covid,
            bio: bio,
            birth: user.birth,
            email: email,
        }
        editUser(updatedUser)
        setEditMode(!editMode)
    }

    return (
        <div key={user.id} className={style.test_users}>
            <div className={style.test_user}>{user.id}</div>
            {!editMode
                ? <>
                    <div className={style.test_user}>{name}</div>
                    <div className={style.test_user}>{bio}</div>
                    <div className={style.test_user}>{email}</div>
                </>
                : <>
                    <input style={{color: 'black'}}
                           onChange={e => changeInputName(e.currentTarget.value)}
                           value={name}/>
                    <input style={{color: 'black'}}
                           onChange={e => changeInputBio(e.currentTarget.value)}
                           value={bio === null ? '' : bio}/>
                    <input style={{color: 'black'}}
                           onChange={e => changeInputEmail(e.currentTarget.value)}
                           value={email === null ? '' : email}/>

                </>
            }
            <div className={style.test_user}>{utc !== null ? utc.toDateString() : 'NULL'} </div>
            {editMode
                ? <input type={"checkbox"}
                         checked={covid !== null}
                         onChange={changeCovid}/>
                : <div>COVID: {covid ? 'YES' : 'NO'}</div>
            }
            <button style={{border: '1px solid red', width: 40}}
                    onClick={() => deletePatient(user.id)}>
                x
            </button>
            <button style={{border: `1px solid ${!editMode ? 'white' : 'green'}`, width: 80}}
                    onClick={!editMode ? changeEditMode : saveUser}>
                {!editMode ? 'EDIT' : 'SAVE'}
            </button>
        </div>
    )
}