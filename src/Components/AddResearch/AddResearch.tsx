// imports
import React, {ChangeEvent, useState} from "react";
import s from './AddResearch.module.css'
import {v1} from "uuid";


//types
type SexType = {
    sex: 'M' | 'W'
}

// components
export function AddResearch(props: any) {

    const [newDate, setNewDate] = useState<string>()
    console.log(typeof newDate)
    const [newCheckCovid, setNewCheckCovid] = useState<any>()
    const [newName, setNewName] = useState<string>('')
    const [newYear, setNewYear] = useState<any>()
    const [newSex, setNewSex] = useState<string>()
    const [newAdress, setNewAdress] = useState<any>()
    const [newResearch, setNewResearch] = useState<any>()
    const [newDose, setNewDose] = useState<any>()

    const onChange_NewDate = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDate(event.currentTarget.value)
    }
    const onChange_newCheckCovid = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCheckCovid(event.currentTarget.value)
    }
    const onChange_NewName = (event: ChangeEvent<HTMLInputElement>) => {
        setNewName(event.currentTarget.value)
    }
    const onChange_newYear = (event: ChangeEvent<HTMLInputElement>) => {
        setNewYear(event.currentTarget.value)
    }
    const onChange_newSex = (sex: 'M' | 'W') => {
        'M' ? setNewSex('M') : setNewSex('W')
    }
    const onChange_newAdress = (event: ChangeEvent<HTMLInputElement>) => {
        setNewAdress(event.currentTarget.value)
    }
    const onChange_newResearch = (event: ChangeEvent<HTMLInputElement>) => {
        setNewResearch(event.currentTarget.value)
    }
    const onChange_newDose = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDose(event.currentTarget.value)
    }


    const addResearch = () => {
        props.addResearchBtn(
            newDate,
            newCheckCovid,
            newName,
            newYear,
            newSex,
            newAdress,
            newResearch,
            newDose,
        )
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
                                   onChange={() => onChange_newSex('M')}
                                   className={s.checkBoxSize}/>
                            <label>М</label>
                        </div>
                        <div className={s.divSex}>
                            <input type={"radio"}
                                   name="sex"
                                   id={'woman'}
                                   value={newSex}
                                   onChange={() => onChange_newSex('W')}
                                   className={s.checkBoxSize}/>
                            <label>Ж</label>
                        </div>
                    </form>
                </td>
                <td>
                    <input id={'adress'}
                           onChange={onChange_newAdress}
                           value={newAdress}/>
                </td>
                <td>
                    <input id={'research'}
                           value={newResearch}
                           onChange={onChange_newResearch}/>
                </td>
                <td><input id={'dose'}
                           type={'number'}
                           value={newDose}
                           onChange={onChange_newDose}/></td>
                <td>
                    <button className={s.btnAddResearch}
                            onClick={addResearch}>
                        +
                    </button>
                </td>
            </tr>
        </table>


    )
}