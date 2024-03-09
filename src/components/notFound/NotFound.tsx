import { NavLink } from 'react-router-dom'
import { filmsApi } from '../../services'
import { mainFilmsChanges } from '../films/filmsSlice'

import './notFound.scss'
import { useAppDispatch } from '../../hooks/hooks'

const NotFound = () => {
    const dispatch = useAppDispatch()

    const resetFilms = () => {
        filmsApi.getByPage(1)
        .then((data:any) => dispatch(mainFilmsChanges(data.results)))
    }

    return (
        <div className='notFound'>
            <div className='notFound__left'>
                <h1>Error</h1>
                <h2>film not found</h2>
                <button onClick={() => resetFilms()}>back to home page</button>
            </div>
            <div className='notFound__right'>
                <div className='notFound__right__circle'></div>
                <div className='notFound__right__gif'></div>
            </div>
        </div>
    )
}

export default NotFound