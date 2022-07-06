import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes, RouteNames } from '../router/index';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.isAuth);

    return (
        isAuth ? 
        <Routes>
            {
                privateRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />}/>)
            }
            <Route path='*' element={<Navigate replace to={RouteNames.EVENT}/>}/>
        </Routes>
        :
        <Routes>
            {
                publicRoutes.map(route => <Route key={route.path} path={route.path} element={<route.element />} />)
            }
            <Route path='*' element={<Navigate replace to={RouteNames.LOGIN}/>}/>
        </Routes>
    );
}

export default AppRouter;