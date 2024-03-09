import { createSlice, createEntityAdapter } from "@reduxjs/toolkit"


const filmsAdapter = createEntityAdapter()

interface States {
    mainFilms: Array<any>,
    genres: Array<any>,
    page: number,
    chooseGenres: boolean
}

const initialState: States = filmsAdapter.getInitialState({
    mainFilms: [],
    genres: [],
    page: 1,
    chooseGenres: false
})

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        mainFilmsChanges: (state, action) => { state.mainFilms = action.payload },
        genresChanges: (state, action) => { state.genres = action.payload },
        pageChanges: (state, action) => { state.page = action.payload },
        chooseGenresChanges: (state, action) => { state.chooseGenres = action.payload }
    },
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