import { useState } from 'react'
import './filmsElement.scss'

interface FilmElement {
    title: string,
    release_date: string,
    poster_path: string,
    genre_ids: Array<number>,
    genres: Array<any>,
    i: number
}

const FilmsElement = ({ title, genre_ids, release_date, poster_path, genres, i }: FilmElement) => {
    
    const [activeClazz, setActiveClazz] = useState<string>('filmsElement')

    let filmGenres;
    genres.forEach(e => {
        if (e.id === genre_ids[0]) {
            filmGenres = e.name
        }
    })

    let firstDelay = 0.22 + (i * 0.03)
    let secondDelay = 0.35 + (i * 0.03)

    setTimeout(()=> setActiveClazz('filmsElement done'),100)

    return (
        <div className={activeClazz} style={{ transitionDelay: `${firstDelay}s, ${secondDelay}s, 0s` }}>
            <a href="">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </a>
            <p>{title.length >= 20 ? `${title.slice(0, 19)}...` : title}</p>
            <p>{`${release_date.slice(0, 4)}, ${filmGenres}`}</p>
        </div>
    )
}

export default FilmsElement