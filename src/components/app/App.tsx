import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';

const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
        </Routes>
    </BrowserRouter>

)

export default App;
