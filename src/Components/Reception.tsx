//imports
import React, {useState} from "react";
import s from './Reception.module.css'
import {v1} from "uuid";
import {Patient} from "./Patients/Patients";
import {Filters} from "./Filters/Filters";
import {AddResearch} from "./AddResearch/AddResearch";

//types
type PatientsPropsType = {
    patients: any
}

//components

export function Reception(props: any) {
    const [patients, setPatients] = useState(
        [
            {
                id: v1(),
                num: 1,
                date: '16.12.2021',
                covid: false,
                namePatient: 'Пашкевич Е.В.',
                year: 1997,
                sex: 'м',
                adress: 'пр-т Дзерж 11-593',
                research: 'ОГК',
                dose: 0.18,
                description: '...',
                conclusion: '...',
            },
            {
                id: v1(),
                num: 2,
                date: '16.12.2021',
                covid: true,
                namePatient: 'Иванов И.И.',
                year: 1978,
                sex: 'м',
                adress: 'пр-т Пушкина 90-234',
                research: 'ОГК',
                dose: 0.18,
                description: '...',
                conclusion: '...',
            },
            {
                id: v1(),
                num: 3,
                date: '16.12.2021',
                covid: false,
                namePatient: 'Петров И.В.',
                year: 1987,
                sex: 'м',
                adress: 'пр-т Фрунзе 921-234',
                research: 'ШОП + ГОП',
                dose: 0.24,
                description: '...',
                conclusion: '...',
            },
            {
                id: v1(),
                num: 4,
                date: '16.12.2021',
                covid: true,
                namePatient: 'Васильева И.В.',
                year: 1956,
                sex: 'ж',
                adress: 'ул. Р.Л. 197',
                research: 'тб суставы',
                dose: 0.05,
                description: '...',
                conclusion: '...',
            },

        ]
    )

    const removeResearch = (id: number) => {
        setPatients(patients.filter((p: any) => p.id !== id))
    }

    const addResearchBtn = (props: any) => {
        let newPatient = {
            id: v1(),
            num: patients[patients.length - 1].num + 1,
            date: props.newDate,
            covid: props.newCheckCovi,
            namePatient: props.newName,
            year: props.newYear,
            sex: props.newSex,
            adress: props.newAdress,
            research: props.newResearch,
            dose: props.newDose,
            description: '...',
            conclusion: '...',
        }
        let newPatients = [ ...patients, newPatient]
        setPatients(newPatients)
        console.log(newPatient)
    }

    return (
        <div className={s.tableDiv}>

            <Filters/>

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
                    <th>Описание:</th>
                    <th>Заключение:</th>
                </tr>

                <Patient patients={patients}
                         setPatients={setPatients}
                         removeResearch={removeResearch}

                />

            </table>

            <h3 className={s.titleAddResearch}>Добаавить пациента:</h3>
            <AddResearch patients={patients}
                         addResearchBtn={addResearchBtn}/>

        </div>
    )
}


