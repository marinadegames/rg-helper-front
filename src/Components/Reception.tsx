//imports
import React, {useState} from "react";
import s from './Reception.module.css'
import {Patients} from "./Patients/Patients";
import {Filters} from "./Filters/Filters";

//types
type PatientsPropsType = {
    patients: any
}

//components

export function Reception(props: any) {

    const [patients, setPatients] = useState(
        [
            {
                id: 1,
                date: '16.12.2021',
                covid: false,
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
                id: 2,
                date: '16.12.2021',
                covid: true,
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
                id: 3,
                date: '16.12.2021',
                covid: false,
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
                id: 4,
                date: '16.12.2021',
                covid: true,
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

    const removeResearch = (id:number) => {
        setPatients(patients.filter((p:any) => p.id !== id ))
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

