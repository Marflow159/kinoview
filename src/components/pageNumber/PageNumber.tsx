import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { pageChanges,mainFilmsChanges } from '../films/filmsSlice'
import { filmsApi } from '../../services'

import './pageNumber.scss'
const PageNumber = () => {
    const { page } = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    let numberOfPage: any

    const onPlus = () => {
        dispatch(pageChanges(page + 1))
        filmsApi.getByPage(page + 1)
            .then((data: any) => dispatch(mainFilmsChanges(data.results)))
    }
    const onMinus = () => {
        dispatch(pageChanges(page - 1))
        filmsApi.getByPage(page - 1)
        .then((data: any) => dispatch(mainFilmsChanges(data.results)))
    }

    return (
        <div className="pageNumber">
            <div className='pageNumber__page'>
                {page > 1 ? <img onClick={() => onMinus()} src="./image/mainPage/left-arrow.png" alt="pageLeft" /> : null}
                <p>{page}</p>
                <img onClick={() => onPlus()} src="./image/mainPage/right-arrow.png" alt="pageRight" />
            </div>
        </div>

    )
}

export default PageNumber