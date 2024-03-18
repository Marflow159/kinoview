import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks'
import { fetchFilms, genresChanges } from './filmsSlice'
import { genresAPI } from '../../services'

import FilmsElement from '../filmsElement/FilmsElement'
import PageNumber from '../pageNumber/PageNumber'
import SkeletonCard from '../skeleton/SkeletonCard'

import './films.scss'
import NotFound from '../notFound/NotFound'


const Films = () => {
    const { mainFilms, genresName, filmLoadingStatus } = useAppSelector(state => state.films)
    const dispatch = useAppDispatch()

    useEffect(() => {
        addGenreAndFilms()
        // eslint-disable-next-line
    }, [])


    const filmsElement = mainFilms.map((item, i) => {
        const { id, ...props } = item
        return <FilmsElement key={id} {...props} genres={genresName} i={i} id={id}/>
    })

    const addGenreAndFilms = () => {
        genresAPI()
            .then((data: any) => dispatch(genresChanges(data.genres)))

        dispatch(fetchFilms())
    }

    let element
    if (filmLoadingStatus === 'loading') {
        element = <SkeletonCard cards={20} />
    } else if (filmLoadingStatus === 'error') {
        element = <h4 className="text-center mt-5">Error</h4>
    } else {
        if (mainFilms.length > 0) {
            element = (
                <>
                    {filmsElement}
                    <PageNumber />
                </>

            )
        } else if (mainFilms.length === 0) {
            element = <NotFound/>
        }
    }
    
    return (
        <div className='films'>
            {element}
        </div>
    )

}

export default Films