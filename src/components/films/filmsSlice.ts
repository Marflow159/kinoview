import { createSlice,  createEntityAdapter } from "@reduxjs/toolkit"


const filmsAdapter = createEntityAdapter()

interface States {
    mainFilms: Array<any>,
    genres: Array<any>
}

const initialState: States = filmsAdapter.getInitialState({
    mainFilms: [],
    genres: []
})

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        mainFilmsChanges: (state, action) => { state.mainFilms = action.payload},
        genresChanges: (state, action) => {state.genres = action.payload}
    },
})

const { actions, reducer } = filmsSlice;

export default reducer;

export const { selectAll } = filmsAdapter.getSelectors((state: any) => state.films)

export const {
    mainFilmsChanges,
    genresChanges
} = actions