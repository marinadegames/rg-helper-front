//imports
import React, {useState} from "react";
import s from './Reception.module.css'
<<<<<<< HEAD
import {v1} from "uuid";
=======
import {Patients} from "./Patients/Patients";
import {Filters} from "./Filters/Filters";
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd

//types
type PatientsPropsType = {
    patients: any
}

//components

export function Reception(props: any) {

    const [patients, setPatients] = useState(
        [
            {
<<<<<<< HEAD
                id: v1(),
                num: 1,
=======
                id: 1,
                date: '16.12.2021',
                covid: false,
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
                namePatient: 'Пашкевич Е.В.',
                year: 1997,
                sex: 'м',
                adress: 'пр-т Дзерж 11-593',
                research: 'ОГК',
                dose: 0.18,
                description: '...',
                conclusion: 'N'
            },
            {
<<<<<<< HEAD
                id: v1(),
                num: 2,
=======
                id: 2,
                date: '16.12.2021',
                covid: true,
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
                namePatient: 'Иванов И.И.',
                year: 1978,
                sex: 'м',
                adress: 'пр-т Пушкина 90-234',
                research: 'ОГК',
                dose: 0.18,
                description: 'ОПИСАНИЕ',
                conclusion: 'ЗАКЛЮЧЕНИЕ'
            },
            {
<<<<<<< HEAD
                id: v1(),
                num: 3,
=======
                id: 3,
                date: '16.12.2021',
                covid: false,
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
                namePatient: 'Петров И.В.',
                year: 1987,
                sex: 'м',
                adress: 'пр-т Фрунзе 921-234',
                research: 'ШОП + ГОП',
                dose: 0.24,
                description: 'Шейный лордоз сглажен. Контуры уплотнены. Высота МПД рановкелика.',
                conclusion: 'ОХ ШОП 1 степени. Рек-но КТ ШОП. Аномалия Киммерле'
            },
            {
<<<<<<< HEAD
                id: v1(),
                num: 4,
=======
                id: 4,
                date: '16.12.2021',
                covid: true,
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
                namePatient: 'Васильева И.В.',
                year: 1956,
                sex: 'ж',
                adress: 'ул. Р.Л. 197',
                research: 'тб суставы',
                dose: 0.05,
                description: 'Субхондральный скоероз суставоао вцудаьцзущтмпфлждывмтдлвытм',
                conclusion: 'Двусторонний коксартроз 2 степени. '
            },

        ]
    )

<<<<<<< HEAD
    const removeResearch = (num:number) => {
        setPatients(patients.filter((p:any) => p.num !== num))
=======
    const removeResearch = (id:number) => {
        setPatients(patients.filter((p:any) => p.id !== id ))
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
    }

    return (
        <div className={s.tableDiv}>

            <Filters />

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

                <Patients patients={patients}
                          setPatients={setPatients}
                          removeResearch={removeResearch}
                />

            </table>

        </div>
    )
}

<<<<<<< HEAD
export function Patient(props: any) {


    return (
        <>
        {props.patients.map((t: any) => {
                return (
                    <tr key={t.id}>
                        <td>{t.num}</td>
                        <td>{t.namePatient}</td>
                        <td>{t.year}</td>
                        <td>{t.sex}</td>
                        <td>{t.adress}</td>
                        <td>{t.research}</td>
                        <td>{t.dose}</td>
                        <td>{t.description}</td>
                        <td>{t.conclusion}</td>
                        <td><button onClick={ () => props.removeResearch(t.id)}>x</button></td>
                    </tr>
                )
            })}
        </>)
}
=======
>>>>>>> 5493a642360134c16bd8539d87d52589e498c5fd
