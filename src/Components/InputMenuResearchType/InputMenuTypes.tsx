import {Fragment, memo, useCallback, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/solid'
import {ResearchesType, SizeFilmsType} from "../../api/api";

type PropsType = {
    types: any
    callback: (value: ResearchesType | SizeFilmsType) => void
}

export const InputMenuTypes = memo(({types, callback}: PropsType) => {

    const [type, setType] = useState<ResearchesType | SizeFilmsType | 'Выбрать'>('Выбрать')

    const selectType = useCallback((t: ResearchesType | SizeFilmsType) => {
        setType(t)
        callback(t)
    },[callback])

    return (
        <Menu as="div" className="relative inline-block text-left w-full ">
            <div>
                <Menu.Button
                    className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    {type}
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="absolute w-56 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="py-1 ">
                        {types.map((t: any) => {
                            return (
                                <Menu.Item key={Math.random()}>
                                    <div
                                        className={'bg-gray-100 text-gray-900 block px-4 py-2 hover:bg-gray-200 cursor-pointer text-sm'}
                                        onClick={() => selectType(t)}>
                                        {t}
                                    </div>
                                </Menu.Item>
                            )
                        })}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
)