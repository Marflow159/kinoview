import Films from "../films/Films";
import Header from "../header/Header";
import PageNumber from "../pageNumber/PageNumber";

const MainPage = () => {
    return(
        <div>
            <Header/>
            <Films/>
            <PageNumber/>
        </div>
    )
}

export default MainPage;