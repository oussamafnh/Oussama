import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './components/mainpage';

const RouterPage = () => {
    return (
        <Routes>
            <Route path="/" element={<Mainpage />} />
        </Routes>
    );
}

export default RouterPage;
