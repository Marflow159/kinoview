import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { chooseGenresChanges, mainFilmsChanges } from '../films/filmsSlice'
import { filmsApi } from '../../services'

import './header.scss'


const Header = () => {
    const { chooseGenres } = useAppSelector(state => state.films)

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

    const onChooseGenres = () => {
        dispatch(chooseGenresChanges(!chooseGenres))
    }

    return (
        <div className='header'>
            <a href="/" className='header__logo'>
                <h1>Kino<span>VieW</span></h1>
            </a>
            <div className='header__genres' onClick={onChooseGenres}>
                Genres
                <img src="./image/mainPage/up-arrow.png" className={chooseGenres === true ? 'rotate': ''} alt="up-arrow" />
            </div>
            <input onChange={searchMovie} placeholder='Search your movie...' type="text" />
        </div>
    )
}

export default Header