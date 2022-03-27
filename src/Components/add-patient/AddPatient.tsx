import s from './AddPatient.module.css'
import {useSelector} from "react-redux";
import {rootReducerType} from "../../Redux/state";
import {useFormik} from "formik";
import {useState} from "react";
import {ResearchesType} from "../../Redux/patientsReducer";
import {TypeResearchComponent} from "./TypeResearchComponent";
import {v1} from "uuid";


export const AddPatient = () => {

    const nextId = useSelector<rootReducerType, number>(state => state.patients.length)
    const [researches, setResearches] = useState<Array<ResearchesType>>([
        {
            idRes: v1(),
            typeRes: '',
            sizeFilm: '35x35',
            amount: 1,
            projections: 1
        },
    ])


    const formik = useFormik({
        initialValues: {
            id: nextId + 1,
            name: '',
            year: 0,
            sex: '',
            adress: '',
            // res
            dateOfReceipt: new Date()
        },
        onSubmit: values => {
            console.log(values);
        },
    });

    const addRes = () => {
        const newRes = {
            idRes: v1(),
            typeRes: '',
            sizeFilm: '35x35',
            amount: 1,
            projections: 1
        }
        setResearches(
            [...researches, newRes]
        )
    }
    const deleteRes = (id: string) => {
        console.log('delete res ' + id )
        setResearches(researches.filter(res => res.idRes !== id))
    }


    return (
        <div className={s.add_patients}>
            <div className={s.header_add_patients}>Добавление нового пациента:</div>
            <form onSubmit={formik.handleSubmit}>
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
                           type={'text'}
                           placeholder={'ИМЯ'}
                           {...formik.getFieldProps('name')}
                    />
                </div>

                {/* YEAR */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Год:</div>
                    <input className={s.input_add_pat}
                           placeholder={'ГОД'}
                           id={'year'}
                           {...formik.getFieldProps('year')}
                    />
                </div>

                {/* SEX */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Пол:</div>
                    <div className={'mr-3'}>М</div>
                    <input className={s.input_add_pat_radio}
                           type={'radio'}
                           {...formik.getFieldProps('sex')}
                    />
                    <div className={'mr-3'}>Ж</div>
                    <input className={s.input_add_pat_radio}
                           type={'radio'}
                           {...formik.getFieldProps('sex')}
                    />
                </div>

                {/* ADRESS */}
                <div className={s.add_patient_element}>
                    <div className={s.name_field}>Адрес:</div>
                    <input className={s.input_add_pat}
                           placeholder={'Адрес'}
                           id={'adress'}
                           {...formik.getFieldProps('adress')}
                    />
                </div>

                {/* Тип исследования: */}
                <div className={s.box}>
                    <div className={'flex flex-row'}>
                        <div className={s.name_field}>Тип исследования:</div>
                        {/*<Button title={'Добавить'}/>*/}
                        <button onClick={addRes} className={'border border-red-200 w-32'}>+</button>
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
                                    callback={deleteRes}/>
                            )
                        })}
                    </div>
                </div>


                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
