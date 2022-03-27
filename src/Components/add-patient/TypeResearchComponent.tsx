import {InputMenuTypes} from "../InputMenuResearchType/InputMenuTypes";
import {Counter} from "../counter/Counter";
import {useState} from "react";
import {ResearchesType} from "../../Redux/patientsReducer";

type PropsType = {
    id: string
    callback: (value: any) => void
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
    const [researches, setResearches] = useState<Array<ResearchesType>>([])

    const deleteRes = () => {
        props.callback(props.id)
    }

    return (

        <div className="table-row-group">
            <div className="table-row">
                <div className="table-cell p-2 text-start border border-gray-400">
                    <InputMenuTypes types={researchTypes}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <InputMenuTypes types={sizeFilms}/>
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
                <div
                    className="
                cursor-pointer
                transition
                table-cell
                text-center
                hover:bg-red-600
                border
                border-gray-400">
                    <button onClick={deleteRes}>x</button>
                </div>
            </div>
        </div>


    )
}