// imports
import React, {ChangeEvent, useState} from "react";
import s from './AddResearch.module.css'
import {v1} from "uuid";
import { DatePicker, Space } from 'antd';


//types
type SexType = {
    sex: 'М' | 'Ж'
}

// components
export function AddResearch(props: any) {

    let [newDate, setNewDate] = useState<string>()
    let [newCheckCovid, setNewCheckCovid] = useState<any>(false)
    let [newName, setNewName] = useState<string>('')
    let [newYear, setNewYear] = useState<any>()
    let [newSex, setNewSex] = useState<string>()
    let [newAddress, setNewAddress] = useState<string>()
    let [newResearch, setNewResearch] = useState<any>()
    let [newDose, setNewDose] = useState<any>()

    const onChange_NewDate = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDate(event.target.value)
    }
    const onChange_newCheckCovid = (event: ChangeEvent<HTMLInputElement>) => {
        event.target.checked ? setNewCheckCovid(true) : setNewCheckCovid(false)
    }
    const onChange_NewName = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.target.value)
    }
    const onChange_newYear = (event: ChangeEvent<HTMLInputElement>) => {
        setNewYear(event.currentTarget.value)
    }
    const onChange_newSex = (sex: 'М' | 'Ж') => {
        sex === 'М' ? setNewSex('М') : setNewSex('Ж')
    }
    const onChange_newAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setNewAddress(event.currentTarget.value)
    }
    const onChange_newResearch = (event: ChangeEvent<HTMLInputElement>) => {
        setNewResearch(event.currentTarget.value)
    }
    const onChange_newDose = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDose(event.currentTarget.value)
    }


    const addResearchBtn = () => {
        let newPatient = {
            id: v1(),
            num: props.patients[props.patients.length - 1].num + 1,
            date: newDate,
            covid: newCheckCovid,
            namePatient: newName,
            year: newYear,
            sex: newSex,
            address: newAddress,
            research: newResearch,
            dose: newDose,
            description: '...',
            conclusion: '...',
        }
        let newPatients = [ ...props.patients, newPatient]
        props.setPatients(newPatients)
        console.log(newPatients)
        setNewDate('')
        setNewCheckCovid('')
        setNewName('')
        setNewYear('')
        setNewSex('')
        setNewAddress('')
        setNewResearch('')
        setNewDose('')

    }

    return (
        <table>
            <tr>
                <th>№ п/п</th>
                <th>Дата</th>
                <th>Covid+</th>
                <th>ФИО</th>
                <th>Год</th>
                <th>Пол</th>
                <th>Адрес</th>
                <th>Исследование</th>
                <th>Доза (мЗв)</th>
                <th>+</th>
            </tr>


            <tr key='9999'>
                <td>{props.patients[props.patients.length - 1].num + 1}</td>
                <td><input type={'date'}
                           onChange={onChange_NewDate}
                           value={newDate}/>
                </td>
                <td className={s.covidCheck}>
                    <input type={"checkbox"}
                           onChange={onChange_newCheckCovid}
                           value={newCheckCovid}
                           className={s.checkBoxSize}/>
                </td>
                <td>
                    <input onChange={onChange_NewName}
                           value={newName}/>
                </td>
                <td>
                    <input type={'number'}
                           min="1900"
                           max="2099"
                           step="1"
                           value={newYear}
                           onChange={onChange_newYear}/>
                </td>
                <td>
                    <form>
                        <div className={s.divSex}>
                            <input type={"radio"}
                                   name='sex'
                                   id={'man'}
                                   value={newSex}
                                   onChange={() => onChange_newSex('М')}
                                   className={s.checkBoxSize}/>
                            <label>М</label>
                        </div>
                        <div className={s.divSex}>
                            <input type={"radio"}
                                   name="sex"
                                   id={'woman'}
                                   value={newSex}
                                   onChange={() => onChange_newSex('Ж')}
                                   className={s.checkBoxSize}/>
                            <label>Ж</label>
                        </div>
                    </form>
                </td>
                <td>
                    <input onChange={onChange_newAddress}
                           value={newAddress}/>
                </td>
                <td>
                    <input value={newResearch}
                           onChange={onChange_newResearch}/>
                </td>
                <td><input type={'number'}
                           value={newDose}
                           onChange={onChange_newDose}/></td>
                <td>
                    <button className={s.btnAddResearch}
                            onClick={addResearchBtn}>
                        +
                    </button>
                </td>
            </tr>
        </table>


    )
}