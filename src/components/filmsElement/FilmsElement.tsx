import './filmsElement.scss'

interface FilmElement {
    title: string,
    vote_average: number,
    vote_count: number,
    release_date: number,
    poster_path: string,
    genre_ids: Array<number>
}

const FilmsElement = ({ title, vote_average, vote_count, genre_ids, release_date, poster_path }: FilmElement) => {

    return (
        <div className="filmsElement">
            <a href="">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </a>
            <p>{title.length >= 20 ? `${title.slice(0, 19)}...` : title}</p>
        </div>
    )
}

export default FilmsElement