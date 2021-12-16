// imports
import React from "react";
import s from './Patients.module.css'

// components
export function Patients(props: any) {
    const removeResearch = (id:number) => {
        props.setPatients(props.patients.filter((p:any) => p.id !== id ))
    }


    let checkCovid = (c:boolean) => {
        if (c) return '+'
    }

    return (
        <>
            {props.patients.map((t: any) => {
                return (
                    <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.date}</td>
                        <td className={s.covid}>{checkCovid(t.covid)}</td>
                        <td>{t.namePatient}</td>
                        <td>{t.year}</td>
                        <td>{t.sex}</td>
                        <td>{t.adress}</td>
                        <td>{t.research}</td>
                        <td>{t.dose}</td>
                        <td>{t.description}</td>
                        <td>{t.conclusion}</td>
                        <td><button onClick={ () => removeResearch(t.id)}>x</button></td>
                    </tr>
                )
            })}
        </>)
}