import { useEffect } from "react";
import { filmsApi } from "../../services";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filmInfoChanges } from "../films/filmsSlice";

import './filmInfo.scss'

const FilmInfo = ({ filmId }: any) => {

    const dispatch = useAppDispatch()

    const { filmInfo } = useAppSelector(state => state.films)

    useEffect(() => { 
        filmsApi.getById(filmId)
            .then((data: any) => dispatch(filmInfoChanges(data)))
        // eslint-disable-next-line
    }, [])

    const { backdrop_path, budget, genres, homepage, title, overview, production_companies, release_date, revenue, runtime, vote_average,vote_count }: any = filmInfo

    console.log(filmInfo);

    const bg = {
        background : `url(https://image.tmdb.org/t/p/original/${backdrop_path}) center center / cover no-repeat fixed`
    }
    return (
        <div className="filmInfo" style={bg}>

        </div>
    )
}

export default FilmInfo