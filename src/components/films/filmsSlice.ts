import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook"


const filmsAdapter = createEntityAdapter()

interface States {
    mainFilms: Array<any>,
    genres: Array<any>,
    page: number,
    chooseGenres: boolean,
    filmLoadingStatus: string
}

const initialState: States = filmsAdapter.getInitialState({
    mainFilms: [],
    genres: [],
    page: 1,
    chooseGenres: false,
    filmLoadingStatus: 'idle'
})

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    () => {
        const { request } = useHttp();
        return request("https://api.themoviedb.org/3/movie/popular?page=1", 'GET', null, { 'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}` })
    }
)

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        mainFilmsChanges: (state, action) => { state.mainFilms = action.payload },
        genresChanges: (state, action) => { state.genres = action.payload },
        pageChanges: (state, action) => { state.page = action.payload },
        chooseGenresChanges: (state, action) => { state.chooseGenres = action.payload }
    },
    extraReducers: (buider) => {
        buider
            .addCase(fetchFilms.pending, state => { state.filmLoadingStatus = 'loading' })
            .addCase(fetchFilms.fulfilled, (state:any, action) => {
                state.filmLoadingStatus = 'idle';
                filmsAdapter.setAll(state, action.payload);

                state.mainFilms = action.payload.results;
            })
            .addCase(fetchFilms.rejected, state => { state.filmLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = filmsSlice;

export default reducer;

export const { selectAll } = filmsAdapter.getSelectors((state: any) => state.films)

export const {
    mainFilmsChanges,
    genresChanges,
    pageChanges,
    chooseGenresChanges
} = actions