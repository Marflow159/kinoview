import './filmsElement.scss'

interface FilmElement {
    title: string,
    release_date: string,
    poster_path: string,
    genre_ids: Array<number>,
    genres: Array<any>
}

const FilmsElement = ({ title, genre_ids, release_date, poster_path, genres}: FilmElement) => {

    let filmGenres;
    genres.forEach(e => {
        if(e.id === genre_ids[0]){
            filmGenres = e.name
        }
    })
    
    return (
        <div className="filmsElement">
            <a href="">
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            </a>
            <p>{title.length >= 20 ? `${title.slice(0, 19)}...` : title}</p>
            <p>{`${release_date.slice(0,4)}, ${filmGenres}`}</p>
        </div>
    )
}

export default FilmsElement