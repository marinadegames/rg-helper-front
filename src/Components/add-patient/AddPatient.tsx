import s from './AddPatient.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {Button} from "../universal components/Button";
import {useState} from "react";
import {InputMenuTypes} from "../InputMenuResearchType/InputMenuTypes";
import {Counter} from "../counter/Counter";


export const AddPatient = () => {

    const nextId = useSelector<rootReducerType, number>(state => state.patients.length)

    const [research, setResearch] = useState<Array<any>>([])

    const researchTypes = [
        'ОГК',
        'Т/Б СУСТАВЫ',
        'Стопы',
        'ШОП',
        'ПОП',
        'ШОП',
        'ГПОП',
        'ПКОК',
        'ППН',
        'Другое',
        'Rg-скопия желудка',
        'Rg-скопия легких',

    ]

    return (
        <div className={s.add_patients}>
            <div className={s.header_add_patients}>Добавление нового пациента:</div>

            {/* ID */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Номер снимка:</div>
                <div className={s.name_field}>{nextId + 1}</div>
            </div>

            {/* NAME */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>ФИО:</div>
                <input className={s.input_add_pat} placeholder={'ИМЯ'}/>
            </div>

            {/* YEAR */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Год:</div>
                <input className={s.input_add_pat} placeholder={'ГОД'}/>
            </div>

            {/* SEX */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Пол:</div>
                <div className={'mr-3'}>М</div>
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}/>
                <div className={'mr-3'}>Ж</div>
                <input className={s.input_add_pat_radio}
                       type={'radio'}
                       name={'sex'}/>
            </div>

            {/* ADRESS */}
            <div className={s.add_patient_element}>
                <div className={s.name_field}>Адрес:</div>
                <input className={s.input_add_pat} placeholder={'Адрес'}/>
            </div>

            {/* Тип исследования: */}
            <div className={s.box}>
                <div className={'flex flex-row'}>
                    <div className={s.name_field}>Тип исследования:</div>
                    <Button title={'Добавить'}/>
                </div>

                {/*TABLE*/}
                <div className={'flex flex-col my-4 '}>
                    <div className="table w-full ">
                        <div className="table-header-group ...">
                            <div className="table-row">
                                <div
                                    className="table-cell w-1/6 font-bold p-2 text-center border border-gray-400 text-left">Тип
                                </div>
                                <div
                                    className="table-cell w-1/6 font-bold p-2 text-center border border-gray-400 text-left">Пленка
                                </div>
                                <div
                                    className="table-cell w-1/6 font-bold p-2 text-center border border-gray-400 text-left">Кол-во
                                </div>
                                <div
                                    className="table-cell w-1/6 font-bold p-2 text-center border border-gray-400 text-left">Проекций
                                </div>
                                <div
                                    className="table-cell w-1/6 font-bold p-2 text-center border border-gray-400 text-left">Доза,
                                    мЗв
                                </div>
                            </div>
                        </div>
                        <div className="table-row-group">
                            <div className="table-row">
                                <div className="table-cell p-2 text-start border border-gray-400">
                                    <InputMenuTypes types={researchTypes}/>
                                </div>
                                <div className="table-cell p-2 text-center border border-gray-400">
                                    <InputMenuTypes types={researchTypes}/>
                                </div>
                                <div className="table-cell p-2 text-center border border-gray-400">
                                    <Counter/>
                                </div>
                                <div className="table-cell p-2 text-center border border-gray-400">
                                    <Counter/>
                                </div>
                                <div className="table-cell p-2 text-center border border-gray-400">
                                    <input name={'dose'}
                                           type={'number'}
                                           className={'text-gray-800'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}