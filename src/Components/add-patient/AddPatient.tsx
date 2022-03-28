import s from './AddPatient.module.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {memo, useState} from "react";
import {AddPatientTC, PatientType, ResearchesType} from "../../Redux/patientsReducer";
import {TypeResearchComponent} from "./TypeResearchComponent";
import {v1} from "uuid";
import {Button} from "../universal components/Button";
import {formatDate} from "../../Utils/formatDate";
import {setErrorMessageTC} from "../../Redux/appReducer";


export const AddPatient = memo(() => {

        // state
        const nextId = useSelector<rootReducerType, number>(state => state.patients.length)
        const [name, setName] = useState<string>('')
        const [year, setYear] = useState<number>(1900)
        const [sex, setSex] = useState<string>('')
        const [adress, setAdress] = useState<string>('')
        const [researches, setResearches] = useState<Array<ResearchesType>>([])
        const dispatch = useDispatch()

        // functional
        const addRes = () => {
            const newId = v1()
            const newRes = {
                idRes: newId,
                typeRes: '',
                sizeFilm: '',
                amount: 0,
                projections: 0,
                dose: 0,
            }
            setResearches(
                [...researches, newRes]
            )
        }
        const deleteRes = (id: string) => setResearches(researches.filter(res => res.idRes !== id))
        const changeName = (e: string) => setName(e)
        const changeYear = (e: number) => setYear(e)
        const changeSex = (sex: string) => setSex(sex)
        const changeAdress = (e: string) => setAdress(e)
        const selectTypeRes = (value: string, id: string) => {
            setResearches(researches.map(res => res.idRes === id ? {...res, typeRes: value} : res))
        }
        const selectXrayFilm = (value: string, id: string) => {
            setResearches(researches.map(res => res.idRes === id ? {...res, sizeFilm: value} : res))
        }
        const selectAmount = (num: number, id: string) => {
            setResearches(researches.map(res => res.idRes === id ? {...res, amount: num} : res))
        }
        const selectProjections = (num: number, id: string) => {
            setResearches(researches.map(res => res.idRes === id ? {...res, projections: num} : res))
        }
        const selectDose = (num: number, id: string) => {
            setResearches(researches.map(res => res.idRes === id ? {...res, dose: num} : res))
        }
        const addPatient = () => {
            const payload: PatientType = {
                id: nextId + 1,
                name,
                year,
                sex,
                adress,
                researches,
                dateOfReceipt: new Date(),
                description: '',
                conclusion: '',
            }

            dispatch(AddPatientTC(payload))

            // clear inputs
            setName('')
            setYear(1900)
            setSex('')
            setAdress('')
            setResearches([])
        }

        const addError = () => {
            dispatch(setErrorMessageTC('MESSAGE ERROR TEST'))
        }

        const date = formatDate(new Date())

        // JSX
        return (
            <div className={s.add_patients}>
                <div className={s.header_add_patients}>
                    Добавление нового пациента:
                    <p>Дата: {date}</p>
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
                           value={'Ж'}
                           onChange={e => changeSex(e.currentTarget.value)}
                    />
                    <div className={'mr-3'}>Ж</div>
                    <input className={s.input_add_pat_radio}
                           type={'radio'}
                           name={'sex'}
                           value={'М'}
                           onChange={e => changeSex(e.currentTarget.value)}
                    />
                </div>

                {/* ADRESS */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Адрес:</div>
                    <input className={s.input_add_pat}
                           placeholder={'Адрес'}
                           id={'adress'}
                           name={'adress'}
                           value={adress}
                           onChange={e => changeAdress(e.currentTarget.value)}
                    />
                </div>

                {/* Тип исследования: */}
                <div className={s.box}>
                    <div className={'flex flex-row'}>
                        <div className={s.name_field}>Исследования:</div>
                        <Button onClick={addRes} title={'Добавить'}/>
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
                                    key={res.idRes}
                                    id={res.idRes}
                                    deleteRes={deleteRes}
                                    selectTypeRes={selectTypeRes}
                                    selectXrayFilm={selectXrayFilm}
                                    selectAmount={selectAmount}
                                    selectProjections={selectProjections}
                                    selectDose={selectDose}
                                />
                            )
                        })}
                    </div>
                </div>
                <Button title={'Добавить пациента'} onClick={addPatient}/>
                <Button title={'Сгенерировать ошибку'} onClick={addError}/>
            </div>
        )
    }
)