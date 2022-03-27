import {InputMenuTypes} from "../InputMenuResearchType/InputMenuTypes";
import {Counter} from "../counter/Counter";
import {useState} from "react";

type PropsType = {
    id: string
    deleteRes: (value: any) => void
    selectTypeRes: (value: string, id: string) => void
    selectXrayFilm: (value: string, id: string) => void
    selectAmount: (num: number, id: string) => void
    selectProjections: (num: number, id: string) => void
    selectDose: (num: number, id: string) => void
}

export const TypeResearchComponent = (props: PropsType) => {
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
    const sizeFilms = [
        '35x35',
        '28x43',
        '18x35',
    ]

    const [dose, setDose] = useState<number>(0)

    const deleteRes = () => {
        props.deleteRes(props.id)
    }
    const selectTypeRes = (type: string) => {
        props.selectTypeRes(type, props.id)
    }
    const selectTypeFilm = (type: string) => {
        props.selectXrayFilm(type, props.id)
    }
    const selectAmount = (num: number) => {
        props.selectAmount(num, props.id)
    }
    const selectProjections = (num: number) => {
        props.selectProjections(num, props.id)
    }
    const changeDose = (e: number) => {
        setDose(e)
        props.selectDose(e, props.id)
    }


    return (
        <div className="table-row-group">
            <div className="table-row">
                <div className="table-cell p-2 text-start border border-gray-400">
                    <InputMenuTypes callback={selectTypeRes} types={researchTypes}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <InputMenuTypes callback={selectTypeFilm} types={sizeFilms}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <Counter callback={selectAmount}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <Counter callback={selectProjections}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <input name={'dose'}
                           type={'number'}
                           value={dose}
                           onChange={e => changeDose(e.currentTarget.valueAsNumber)}
                           className={'text-gray-800 p-1'}/>
                </div>
                <div onClick={deleteRes}
                     className="
                cursor-pointer
                transition
                table-cell
                text-center
                hover:bg-red-600
                border
                border-gray-400">
                    x
                </div>
            </div>
        </div>


    )
}