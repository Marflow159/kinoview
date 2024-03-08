import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { genresChanges, mainFilmsChanges } from './filmsSlice'
import { genresAPI, filmsApi } from '../../services'

import './films.scss'
import FilmsElement from '../filmsElement/FilmsElement'

const Films = () => {
    const { mainFilms, genres } = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    let pageNumber

    useEffect(() => {
        addGenreAndFilms()
        // eslint-disable-next-line
    }, [])

    // console.log(mainFilms);

    const filmsElement = mainFilms.map((item, i) => {
        const {id, ...props} = item
        return <FilmsElement key={id} {...props} genres={genres} i={i}/>
    })

    const addGenreAndFilms = () => {
        genresAPI()
            .then((data: any) => dispatch(genresChanges(data.genres)))

        filmsApi.getByPage(1)
            .then((data: any) => dispatch(mainFilmsChanges(data.results)))
    }
    
    return (
        <div className='films'>
            {filmsElement}
        </div>
    )

}

export default Films