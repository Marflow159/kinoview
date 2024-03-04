import axios from "axios"

const api = `https://api.themoviedb.org/3/`

const apiInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})

const makeQuery = (url: string) => (
    apiInstance
        .get(api + url)
        .then(responce => (responce.data))
        .catch(e => console.log(e))
)

const filmsApi = {
    getByPage: (page: number) => (makeQuery(`movie/popular?page=${page}`)),
    getById: (id: number) => makeQuery(`movie/${id}`),
    getByGenres: (genreIds: Array<number>, page: number) => (
        makeQuery(`/discover/movie?with_genres=${genreIds.join(',')}&page=${page}`)
    )
}

const genresAPI = () => (makeQuery('genre/movie/list'))
export { filmsApi, genresAPI }