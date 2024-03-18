import { useEffect } from "react";
import { filmsApi } from "../../services";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { filmInfoChanges } from "../films/filmsSlice";

import './filmInfo.scss'
import SkeletonCard from "../skeleton/SkeletonCard";

const FilmInfo = ({ filmId }: any) => {

    const dispatch = useAppDispatch()

    const { filmInfo } = useAppSelector(state => state.films)
    const { backdrop_path, budget, genres, homepage, title, overview, production_companies, release_date, revenue, runtime, vote_average, vote_count, poster_path, tagline }: any = filmInfo

    useEffect(() => {
        filmsApi.getById(filmId)
            .then((data: any) => dispatch(filmInfoChanges(data)))
        // eslint-disable-next-line
    }, [])

    const filmInfoBg = {
        background: `url(https://image.tmdb.org/t/p/original/${backdrop_path}) center center / cover no-repeat fixed`
    }

    let filmGenres: any;
    let filmCompanies: any;

    if (genres !== undefined) {
        filmGenres = genres.map(({ id, name }: any) => {
            return name
        });
    }

    if (production_companies !== undefined) {
        filmCompanies = production_companies.map(({ id, logo_path, name }: any) => {
            return (
                <li key={id} >
                    {logo_path === null ? null :
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500/${logo_path}`} alt='' />
                        </div>}
                    <p>{name}</p>
                </li>
            )
        })
    }

    return (
        <>
            {Object.keys(filmInfo).length === 0 ? <SkeletonCard /> :
                <div className="filmInfo" style={filmInfoBg} key={filmId}>
                    <div className="filmInfo__tab">
                        <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={`${title}`} />
                        <div className="filmInfo__tab__right">
                            <div>
                                <h1>{title}</h1>
                                <ul className="filmInfo__tab__right__ul" >
                                    <li>{release_date}</li>
                                    <li>•</li>
                                    <li>{filmGenres.join(', ')}</li>
                                    <li>•</li>
                                    <li>{`${runtime}m`}</li>
                                </ul>
                            </div>
                            <div className="filmInfo__tab__right__overview">
                                {tagline === '' ? null : <p className="filmInfo__tab__right__overview__tagline">{tagline}</p>}
                                <h3>Overview</h3>
                                <p>{overview}</p>
                                {budget === 0 || revenue === 0 ? null :
                                    <ul className="filmInfo__tab__right__overview__ul">
                                        <li><span>Budget:</span> ${budget}</li>
                                        <li><span>Revenue:</span> ${revenue}</li>
                                    </ul>}
                            </div>
                            <div className="filmInfo__tab__right__companies">
                                <a href={homepage}>Homepage</a>
                                <h3>Companies</h3>
                                <ul className="filmInfo__tab__right__companies__ul">
                                    {filmCompanies}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default FilmInfo