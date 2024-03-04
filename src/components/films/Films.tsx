import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { genresChanges, mainFilmsChanges } from './filmsSlice'

import './films.scss'

import { genresAPI, filmsApi } from '../../services'
const Films = () => {

    const { mainFilms, filmsLoadingStatus } = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    useEffect(() => {
        addGenreAndFilms()

        // eslint-disable-next-line
    }, [])

    // console.log(mainFilms);

    const addGenreAndFilms = () => {
        genresAPI()
            .then(data => dispatch(genresChanges(data.genres)))

        filmsApi.getByPage(1)
            .then(data => dispatch(mainFilmsChanges(data.results)))
    }

    return (
        <div className='films'>

        </div>
    )

}

export default Films