// imports
import React from "react";
import s from './Patients.module.css'

// components
export function Patients(props: any) {

    let checkCovid = (c:boolean) => {
        if (c) return '+'
    }

    return (
        <>
            {props.patients.map((t: any) => {
                return (
                    <tr id={t.id}>
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
                        <td><button className={s.btnDeletePatient}
                                    onClick={ () => props.removeResearch(t.id)}>
                            X
                        </button></td>
                    </tr>
                )
            })}
        </>)
}