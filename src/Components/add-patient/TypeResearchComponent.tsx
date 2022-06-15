import {InputMenuTypes} from "../InputMenuResearchType/InputMenuTypes";
import {Counter} from "../counter/Counter";
import {memo, useCallback, useState} from "react";
import {researchesTypes, sizeFilmsTypes} from "../../Utils/types";
import {ResearchesType, SizeFilmsType} from "../../api/api";

type PropsType = {
    localId: string
    deleteRes: (value: string) => void
    selectTypeRes: (value: ResearchesType, id: string) => void
    selectXrayFilm: (value: SizeFilmsType, id: string) => void
    selectAmount: (num: number, id: string) => void
    selectProjections: (num: number, id: string) => void
    selectDose: (num: number, id: string) => void
}

export const TypeResearchComponent = memo((props: PropsType) => {

    const [dose, setDose] = useState<number>(0)
    const deleteRes = useCallback(() => {
        props.deleteRes(props.localId)
    }, [props])
    const selectTypeRes = useCallback((type: any) => {
        props.selectTypeRes(type, props.localId)
    }, [props])
    const selectTypeFilm = useCallback((type: any) => {
        props.selectXrayFilm(type, props.localId)
    }, [props])
    const selectAmount = useCallback((num: number) => {
        props.selectAmount(num, props.localId)
    }, [props])
    const selectProjections = useCallback((num: number) => {
        props.selectProjections(num, props.localId)
    }, [props])
    const changeDose = useCallback((e: number) => {
        setDose(e)
        props.selectDose(e, props.localId)
    }, [props])

    return (
        <div className="table-row-group">
            <div className="table-row">
                <div className="table-cell p-2 text-start border border-gray-400">
                    <InputMenuTypes id={Math.random()} callback={selectTypeRes} types={researchesTypes} value={null}/>
                </div>
                <div className="table-cell p-2 text-center border border-gray-400">
                    <InputMenuTypes id={Math.random()} callback={selectTypeFilm} types={sizeFilmsTypes} value={null}/>
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
})