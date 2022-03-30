import React, {Fragment, useRef} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {PatientType} from "../../Redux/patientsReducer";
import {EditableSpan} from "../universal components/EditableSpan";

type PropsType = {
    patient: PatientType
    open: boolean
    setOpen: (value: boolean) => void
}

export default function Popup({patient, open, setOpen}: PropsType) {

    const cancelButtonRef = useRef(null)

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
                                            Пациент {patient.name}
                                        </Dialog.Title>
                                        <hr/>
                                        <div className='w-full'>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>Номер исследования: </b>
                                                <label>{patient.id}</label>
                                            </div>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>ФИО: </b>
                                                <EditableSpan title={patient.name} callback={() => {
                                                }}/>
                                            </div>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>Год: </b>
                                                <EditableSpan title={patient.year} callback={() => {
                                                }}/>
                                            </div>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>Пол: </b>
                                                <EditableSpan title={patient.sex} callback={() => {
                                                }}/>
                                            </div>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>Адрес: </b>
                                                <EditableSpan title={patient.adress} callback={() => {
                                                }}/>
                                            </div>
                                            <div className="my-2 text-2xl text-left flex flex-row">
                                                <b className='w-1/4 mr-5'>Исследования: </b>
                                            </div>
                                            <div className="table w-full table bg-gray-800 rounded-md p-3 ">
                                                <div className="table-header-group">
                                                    <div className="table-row">
                                                        <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">Тип</div>
                                                        <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">Пленка</div>
                                                        <div className="table-cell w-1/3 border border-gray-500 text-left text-xl font-bold p-3">Доза</div>
                                                    </div>
                                                </div>
                                                <div className="table-row-group">
                                                    <div className="table-row transition">

                                                        <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                                                            {patient.researches.map(typeRes => {
                                                                return (<p key={typeRes.idRes}>* {typeRes.typeRes}</p>)
                                                            })}
                                                        </div>
                                                        <div className="table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                                                            {patient.researches.map(films => {
                                                                return (<p key={films.idRes}>{films.sizeFilm}/{films.amount}/{films.projections}</p>)
                                                            })}
                                                        </div>
                                                        <div className="flex flex-row table-cell border border-gray-500 text-left text-lg p-3 hover:bg-gray-600 cursor-pointer">
                                                            <div>
                                                                {patient.researches.map(dose => {
                                                                    return <p key={dose.idRes}>{dose.dose} мЗв</p>
                                                                })}
                                                            </div>
                                                            <div>
                                                                Суммарно: {patient.researches.reduce((a:any, b:any) => a.dose + b.dose)} мЗв
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
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
