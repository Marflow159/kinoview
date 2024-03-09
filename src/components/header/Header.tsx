import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { chooseGenresChanges, mainFilmsChanges } from '../films/filmsSlice'
import { filmsApi } from '../../services'

import './header.scss'


const Header = () => {
    const { chooseGenres } = useAppSelector(state => state.films)

    const dispatch = useAppDispatch()

    const searchMovie = (e:any) => {
        let {value} = e.target
        if (value.length === 0) {
            filmsApi.getByPage(1)
                .then((data: any) => dispatch(mainFilmsChanges(data.results)))
        } else {
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
            <input 
            onKeyDown={(e) => {
                if(e.key === 'Enter'){
                    searchMovie(e)
                }
            }} 
            placeholder='Search your movie...' type="text" id='inputSearch'/>
        </div>
    )
}

export default Header