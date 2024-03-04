import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { fetchFilms,genresChanges } from './filmsSlice'


import './films.scss'
import { useHttp } from '../../hooks/http.hook'
import { log } from 'console'
import { genresAPI } from '../../services'
const Films = () => {

    const { mainFilms, filmsLoadingStatus } = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFilms())
        addGenre()
        
        // eslint-disable-next-line
    }, [])

    // console.log(mainFilms);

    const addGenre = () =>{
        genresAPI()
        .then(value => value.json())
        .then((value:any) => dispatch(genresChanges(value.genres)))
    }
    return (
        <div className='films'>

        </div>
    )

}

export default Films