import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { filmsApi } from '../../services'
import { chooseGenresChanges, mainFilmsChanges } from '../films/filmsSlice'
import './genres.scss'

const Genres = () => {
    const dispatch = useAppDispatch()
    const { genres, chooseGenres } = useAppSelector(state => state.films)

    let genresButtons = genres.map(({ id, name }) => {
        return (
            <button key={id} onClick={() => onChooseGenres(id)}>
                {name}
            </button>
        )
    })

    const onChooseGenres = (id: number) => {
        dispatch(chooseGenresChanges(false))
        filmsApi.getByGenres(id, 1)
            .then((data: any) => dispatch(mainFilmsChanges(data.results)))
    }
    return (
        <div className={chooseGenres === false ? `genres` : `genres active`}>
            {genresButtons}
        </div>

    )
}

export default Genres