import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { genresChanges, mainFilmsChanges } from './filmsSlice'
import { genresAPI, filmsApi } from '../../services'

import './films.scss'
import FilmsElement from '../filmsElement/FilmsElement'

const Films = () => {

    const { mainFilms } = useAppSelector(state => state.films)

    const dispatch = useAppDispatch()

    useEffect(() => {
        addGenreAndFilms()
        // eslint-disable-next-line
    }, [])

    // console.log(mainFilms);

    const filmsElement = mainFilms.map(item => {
        const {id, ...props} = item
        return <FilmsElement key={id} {...props}/>
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