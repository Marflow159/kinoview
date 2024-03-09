import Films from "../films/Films";
import Genres from "../genres/Genres";
import Header from "../header/Header";
import PageNumber from "../pageNumber/PageNumber";

const MainPage = () => {

    
    return(
        <div>
            <Header/>
            <Genres/>
            <Films/>
        </div>
    )
}

export default MainPage;