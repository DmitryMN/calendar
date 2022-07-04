import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';
import { publicRoutes, privateRoutes } from '../router/index';

export const AppRouter = () => {
    const isAuth = true;

    return (
        isAuth ? 
        <Routes>
            {
                publicRoutes.map(route => <Route path={route.path} element={<route.element />} />)
            }
        </Routes>
        :
        <Routes>
            {
                privateRoutes.map(route => <Route path={route.path} element={<route.element />}/>)
            }
        </Routes>
    );
}
