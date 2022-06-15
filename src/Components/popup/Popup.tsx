import React, {Fragment, memo, useCallback, useRef, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {PatientType, ResearchType, SexTypes} from "../../api/api";
import {useDispatch} from "react-redux";
import {EditableSpan} from "../universal components/EditableSpan";
import {EditAddressPatientTC, EditNamePatientTC, EditSexPatientTC, EditYearPatientTC} from "../../Redux/patientsReducer";
import {EditableSpanSex} from '../universal components/EditableSpanSex';
import {InputMenuTypes} from '../InputMenuResearchType/InputMenuTypes';
import {researchesTypes, sizeFilmsTypes} from "../../Utils/types";

type PropsType = {
    patient: PatientType
    researches: Array<ResearchType>
    open: boolean
    setOpen: (value: boolean) => void
}

export const Popup = memo(({patient, open, setOpen, researches}: PropsType) => {

        // state
        const dispatch = useDispatch()

        const cancelButtonRef = useRef(null)

        const [modeTypeResearch, setModeTypeResearch] = useState<boolean>(false)
        const [modeFilms, setModeFilms] = useState<boolean>(false)
        const [modeDose, setModeDose] = useState<boolean>(false)

        const selectTypeRes = (value: string, idRes: string, idPat: number) => {
            // dispatch(EditResearchTypePatient(value, idRes, idPat))
        }

        const changeModeTypeResearch = (e: any) => {
            e.stopPropagation()
            setModeTypeResearch(!modeTypeResearch)
        }
        const changeModeFilms = () => setModeFilms(!modeFilms)
        const changeModeDose = () => setModeDose(!modeDose)

        const editName = useCallback((name: string) => {
            dispatch(EditNamePatientTC(patient.id, name))
        }, [dispatch, patient.id])

        const editYear = useCallback((year: number) => {
            dispatch(EditYearPatientTC(patient.id, year))
        }, [dispatch, patient.id])

        const editSex = useCallback((sex: SexTypes) => {
            dispatch(EditSexPatientTC(patient.id, sex))
        }, [dispatch, patient.id])

        const editAddress = useCallback((address: string) => {
            dispatch(EditAddressPatientTC(patient.id, address))
        }, [dispatch, patient.id])

        return (
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="flex justify-center items-center fixed z-10 inset-0 overflow-y-auto"
                        initialFocus={cancelButtonRef}
                        onClose={() => setOpen(!open)}>
                    <div
                        className="flex items-center justify-center pt-4 px-4 text-center w-full">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4"
                            enterTo="opacity-100 translate-y-0"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-4"
                        >
                            <div
                                className="flex flex-col w-10/12 bg-gray-700 rounded-md text-left overflow-hidden shadow-xl transform transition-all">
                                <div className="w-full bg-gray-800 px-4 pt-1 pb-4">
                                    <div>
                                        <div className="mt-3 text-left">
                                            <Dialog.Title as="h3" className="text-3xl pb-3 text-left leading-6 font-medium text-white">
                                                📃 Пациент {patient.name}
                                            </Dialog.Title>
                                            <hr/>
                                            <div className='w-full'>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>🔢 Номер исследования: </b>
                                                    <label>{patient.id}</label>
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>👤 ФИО: </b>
                                                    <EditableSpan title={patient.name} callback={editName}/>
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>🚼 Год: </b>
                                                    <EditableSpan title={patient.birthyear.years} callback={editYear}/>
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>️♂️♀️ Пол: </b>
                                                    <EditableSpanSex sex={patient.sex} callback={editSex}/>
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>🏠 Адрес: </b>
                                                    <EditableSpan title={patient.address} callback={editAddress}/>
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-row">
                                                    <b className='w-1/4 mr-5'>🔍 Исследования: ⬇️</b>
                                                </div>
                                                <div className="table w-full table bg-gray-800 rounded-md p-3 ">
                                                    <div className="table-header-group">
                                                        <div className="table-row">
                                                            <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">🆔 Тип исследования:</div>
                                                            <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">🎞️ Пленка (р | кол | пр)</div>
                                                            <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">☢️ Доза, мЗв</div>
                                                        </div>
                                                    </div>
                                                    <div className="table-row-group">
                                                        <div className="table-row transition">

                                                            <div className="table-cell border border-gray-500 text-left text-lg p-2 m-0 hover:bg-gray-600 cursor-pointer">
                                                                {researches.map(typeRes => {
                                                                    return (
                                                                        modeTypeResearch
                                                                            ? <InputMenuTypes callback={() => {
                                                                            }} types={researchesTypes} key={typeRes.idres}/>
                                                                            : <p className={'text-2xl bg-gray-700 rounded-lg p-2 mb-2'}
                                                                                 onClick={changeModeTypeResearch} key={typeRes.idres}>{typeRes.typeres}</p>)
                                                                })}
                                                            </div>
                                                            <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                                                                {researches.map(films => {
                                                                    return (
                                                                        modeFilms
                                                                            ? <InputMenuTypes callback={() => {
                                                                            }} types={sizeFilmsTypes} key={films.idres}/>
                                                                            : <p onClick={changeModeFilms}
                                                                                 className={'text-2xl bg-gray-700 rounded-lg p-2 mb-2'}
                                                                                 key={films.idres}>
                                                                                {films.sizefilm} | {films.amount} | {films.projections}
                                                                            </p>
                                                                    )
                                                                })}
                                                            </div>
                                                            <div className="flex flex-row table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                                                                <div>
                                                                    {researches.map(dose => modeDose
                                                                        ? <input name={'dose'}
                                                                                 type={'number'}
                                                                                 value={dose.dose}
                                                                                 onChange={() => {
                                                                                 }}
                                                                                 className={'text-gray-800 p-1'}/>
                                                                        : <p onClick={changeModeDose}
                                                                             className={'text-2xl bg-gray-700 rounded-lg p-2 mb-2'}
                                                                             key={dose.idres}>{dose.dose} мЗв</p>
                                                                    )}
                                                                </div>
                                                                {researches.length > 1 && <div className={'text-2xl bg-gray-500 rounded-lg p-3 mb-2'}>

                                                                    Суммарно: {researches.map(res => {
                                                                    return Math.round(Number(res.dose) * 100)/100
                                                                }).reduce((a: number, b: number) => a + b).toFixed(2)} мЗв
                                                                </div>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="my-2 mb-3 text-2xl text-left flex flex-col">
                                                    <b className='w-1/4 mr-5'>📝 Описание: </b>
                                                    {patient.description ? patient.description : 'НЕ ОПИСАНО'}
                                                </div>
                                                <div className="my-2 text-2xl text-left flex flex-col">
                                                    <b className='w-1/4 mr-5'>✅ Заключение: </b>
                                                    {patient.conclusion ? patient.conclusion : 'НЕ ОПИСАНО'}
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-800 p-4 flex flex-row justify-end">
                                    <button
                                        type="button"
                                        className="w-1/6 flex items-center justify-center items-center rounded-md mr-2 py-2 px-4 bg-red-200 text-base font-medium text-gray-700 hover:bg-red-300  "
                                        onClick={() => setOpen(!open)}
                                        ref={cancelButtonRef}>
                                        Закрыть
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        )
    }
)