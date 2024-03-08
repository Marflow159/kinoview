import { createSlice,  createEntityAdapter } from "@reduxjs/toolkit"


const filmsAdapter = createEntityAdapter()

interface States {
    mainFilms: Array<any>,
    genres: Array<any>,
    page: number
}

const initialState: States = filmsAdapter.getInitialState({
    mainFilms: [],
    genres: [],
    page: 1
})

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        mainFilmsChanges: (state, action) => { state.mainFilms = action.payload},
        genresChanges: (state, action) => {state.genres = action.payload},
        pageChanges: (state, action) => {state.page = action.payload}
    },
})

const { actions, reducer } = filmsSlice;

export default reducer;

export const { selectAll } = filmsAdapter.getSelectors((state: any) => state.films)

export const {
    mainFilmsChanges,
    genresChanges,
    pageChanges
} = actions