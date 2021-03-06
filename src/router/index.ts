import React from "react";
import { Login } from "../pages/Login";
import { Event } from "../pages/Event";

export type IRoute = {
    path: string;
    element: React.ComponentType;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/',
}

export const publicRoutes: Array<IRoute> = [
    { 
        path: RouteNames.LOGIN,
        element: Login, 
    },
];
export const privateRoutes: Array<IRoute> = [
    { 
        path: RouteNames.EVENT,
        element: Event, 
    },
];