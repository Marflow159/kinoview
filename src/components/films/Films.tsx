import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'


import './films.scss'
import { fetchFilms } from './filmsSlice'

const Films = () => {

    const {mainFilms, filmsLoadingStatus} = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchFilms)
    })
    
    return(
        <div className='films'>

        </div>
    )

}

export default Films