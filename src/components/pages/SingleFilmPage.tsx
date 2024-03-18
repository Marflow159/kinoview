import { useParams } from "react-router-dom"
import FilmInfo from "../filmInfo/FilmInfo";

const SingleFilmPage = () => {
    const { filmId } = useParams()

    const styleFilmInfo = {
        width: '100%',
        height: '100vh'
    }
    return (
        <div style={styleFilmInfo}>
            <FilmInfo filmId={filmId}/>
        </div>
    )
}

export default SingleFilmPage