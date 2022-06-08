import s from './Search.module.css'


export const Search = () => {

    // const result = useSelector<rootReducerType, PatientType[]>(state => state.patients.searchResult)
    // const [value, setValue] = useState<string>('')
    // const dispatch = useDispatch()
    // console.log(result)

    // const onChangeHandler = (e: string) => {
    //     setValue(e)
    //     dispatch(SearchPatientsAC(value))
    // }

    return (
        <div className={s.search_container}>
            <div className={s.search_header}>
                Поиск пациентов
                {/*<input className={'text-gray-700 px-3'}*/}
                {/*       placeholder={'Введите имя'}*/}
                {/*       onChange={e => onChangeHandler(e.currentTarget.value)}/>*/}
                <input type={"date"}
                       className='text-gray-700 flex justify-center items-center px-2 rounded'
                />
            </div>

            <div className={'w-full'}>
                {/*<TablePatients patients={result}/>*/}
            </div>
        </div>
    )
}