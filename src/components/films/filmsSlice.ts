import { createSlice, createAsyncThunk, createEntityAdapter, PayloadAction } from "@reduxjs/toolkit"
import { useHttp } from "../../hooks/http.hook"

const filmsAdapter = createEntityAdapter()

interface States { 
    mainFilms: Array<any>,
    filmsLoadingStatus: string,
}

const initialState: States = filmsAdapter.getInitialState({
    mainFilms: [],
    filmsLoadingStatus: 'idle'
})

export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    () => {
        const { request } = useHttp()
        return request(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`)
    }
)

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        mainFilmsChanges: (state, action: PayloadAction<Array<any>>) => { state.mainFilms = action.payload }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, state => { state.filmsLoadingStatus = 'loading' })
            .addCase(fetchFilms.fulfilled, (state:any, action) => {
                state.filmsLoadingStatus = 'idle';
                filmsAdapter.setAll(state, action.payload)

                state.mainFilms = action.payload;
            })
            .addCase(fetchFilms.rejected, state => { state.filmsLoadingStatus = 'error' })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = filmsSlice;

export default reducer;

export const { selectAll } = filmsAdapter.getSelectors((state:any) => state.films)

export const {
    mainFilmsChanges,
} = actions