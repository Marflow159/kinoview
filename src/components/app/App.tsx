import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import SingleFilmPage from '../pages/SingleFilmPage';
import Header from '../header/Header';
import Genres from '../genres/Genres';

import './App.scss';


const App: React.FC = () => (
    <div className='app'>
        <BrowserRouter>
            <Genres />
            <Header />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path=':filmId' element={<SingleFilmPage />} />
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;
