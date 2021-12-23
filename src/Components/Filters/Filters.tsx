import React from "react";
import s from './Filters.module.css'


export function Filters() {
    return (
        <div className={s.filters}>
            <h2>Фильтры:</h2>

            <div className={s.allFilters}>

                <div className={s.filterBox}>
                    <h3>По полу:</h3>
                    <input type={"checkbox"} name={'man'} id={'man'}/>
                    <label>М</label>
                    <input type={"checkbox"} name={'woman'} id={'woman'}/>
                    <label>Ж</label>
                </div>
                <div className={s.filterBox}>
                    <h3>По фамилии:</h3>
                    <input  name={'hello'}/>
                </div>

            </div>

        </div>
    )
}