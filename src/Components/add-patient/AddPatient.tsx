import s from './AddPatient.module.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {memo, useEffect, useState} from "react";
import {Button} from "../universal components/Button";
import {formatDate} from "../../Utils/formatDate";
import {GetPatientsTC} from "../../Redux/patientsReducer";
import {AddPatientDataType, PostResearchType, SexTypes} from "../../api/api";
import {TypeResearchComponent} from "./TypeResearchComponent";
import {v1} from "uuid";
import {useFormik} from "formik";


export const AddPatient = memo(() => {

        const nextId = useSelector<rootReducerType, number>(state => state.patients.patients.length)
        const dispatch = useDispatch()
        const date = formatDate(new Date())

        const [researches, setResearches] = useState<Array<PostResearchType>>([
            {
                localId: v1(),
                idpatient: nextId,
                typeres: undefined,
                sizefilm: undefined,
                amount: undefined,
                projections: undefined,
                dose: undefined
            },
        ])


        const [name, setName] = useState<string>('')
        const [year, setYear] = useState<number | undefined>()
        const [sex, setSex] = useState<SexTypes>('MAN')
        const [address, setAddress] = useState<string>('')

        useEffect(() => {
            dispatch(GetPatientsTC())
        }, [nextId])

        const changeName = (e: string) => {
            setName(e)
        }
        const changeYear = (e: number) => {
            setYear(e)
        }
        const changeSex = (e: SexTypes) => {
            setSex(e)
        }
        const changeAddress = (e: string) => {
            setAddress(e)
        }

    console.log(sex)

        return (
            <div className={s.add_patients}>
                <div className={s.header_add_patients}>

                    Добавление нового пациента:
                    <div className={'flex flex-row justify-center items-center cursor-pointer'}>
                        {date}
                    </div>
                </div>
                {/* ID */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Номер снимка:</div>
                    <div className={s.name_field}>{nextId + 1}</div>
                </div>

                {/* NAME */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>ФИО:</div>
                    <input className={s.input_add_pat}
                           id={'name'}
                           name={'name'}
                           type={'text'}
                           placeholder={'ИМЯ'}
                           value={name}
                           onChange={e => changeName(e.currentTarget.value)}
                    />
                </div>

                {/* YEAR */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Год:</div>
                    <input className={s.input_add_pat}
                           placeholder={'ГОД'}
                           id={'year'}
                           min={1900}
                           max={2100}
                           type={"number"}
                           name={'year'}
                           value={year}
                           onChange={e => changeYear(e.currentTarget.valueAsNumber)}
                    />
                </div>

                {/* SEX */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Пол:</div>
                    <div className={'mr-3'}>М</div>
                    <input className={s.input_add_pat_radio}
                           type={'radio'}
                           name={'sex'}
                           value={'MAN'}
                           onChange={() => changeSex('MAN')}
                    />
                    <div className={'mr-3'}>Ж</div>
                    <input className={s.input_add_pat_radio}
                           type={'radio'}
                           name={'sex'}
                           value={'WOMAN'}
                           onChange={() => changeSex('WOMAN')}
                    />
                </div>

                {/* ADDRESS */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Адрес:</div>
                    <input className={s.input_add_pat}
                           placeholder={'Адрес'}
                           id={'address'}
                           name={'address'}
                           value={address}
                           onChange={e => changeAddress(e.currentTarget.value)}
                    />
                </div>


                {/* Тип исследования: */}
                <div className={s.box}>
                    <div className={'flex flex-row'}>
                        <div className={s.name_field}>Исследования:</div>
                        <Button onClick={() => {
                        }} title={'Добавить'}/>
                    </div>
                </div>
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
                                <div
                                    className="table-cell w-1/12 font-bold p-2 text-center border border-gray-400 text-left">Удалить
                                </div>
                            </div>
                        </div>
                        {researches.map(res => {
                            return (
                                <TypeResearchComponent
                                    key={res.localId}
                                    id={res.localId}
                                    deleteRes={() => {
                                    }}
                                    selectTypeRes={() => {
                                    }}
                                    selectXrayFilm={() => {
                                    }}
                                    selectAmount={() => {
                                    }}
                                    selectProjections={() => {
                                    }}
                                    selectDose={() => {
                                    }}
                                />
                            )
                        })}
                    </div>
                </div>
                <Button title={'Добавить пациента'} onClick={() => {
                }}/>
                <Button title={'Сгенерировать ошибку'} onClick={() => {
                }}/>
                <Button title={'Сгенерировать успешность'} onClick={() => {
                }}/>
            </div>
        )
    }
)
