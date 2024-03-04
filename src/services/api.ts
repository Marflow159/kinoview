import { useAppDispatch } from "../hooks/hooks"


const makeQuery = (url: string) => {
    return `https://api.themoviedb.org/3/${url}`
}

const filmsApi = {
    getByPage: (page: number) => (makeQuery(`movie/popular?page=${page}`)),
    getById: (id: number) => makeQuery(`movie/${id}`),
    getByGenres: (genreIds: Array<number>, page: number) => (
        makeQuery(`/discover/movie?with_genres=${genreIds.join(',')}&page=${page}`)
    )
}

const genresAPI = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
            }
        };

        return fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
}
export { filmsApi, genresAPI }