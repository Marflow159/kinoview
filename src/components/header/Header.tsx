import { FormEvent } from 'react'
import './header.scss'
import { useAppDispatch } from '../../hooks/hooks'
import { mainFilmsChanges } from '../films/filmsSlice'
import { filmsApi } from '../../services'
const Header = () => {
    const dispatch = useAppDispatch()

    const searchMovie = ({ target: { value } }: any) => {
        if (value.length === 0) {
            dispatch(mainFilmsChanges([]))
            filmsApi.getByPage(1)
                .then((data: any) => dispatch(mainFilmsChanges(data.results)))
        } else {
            dispatch(mainFilmsChanges([]))
            filmsApi.searchMovie(value, 1)
                .then((data: any) => dispatch(mainFilmsChanges(data.results)))
        }
    }

    return (
        <div className='header'>
            <a href="/" className='header__logo'>
                <h1>Kino<span>VieW</span></h1>
            </a>
            <input onChange={searchMovie} placeholder='Search your movie...' type="text" />
        </div>
    )
}

export default Header