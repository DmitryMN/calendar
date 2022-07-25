import { IUser } from "../../../models/IUser"

export type AuthState = {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    error?: string
}

export enum ACTIONS_TYPE {
    IS_AUTH = 'AUTH/IS_AUTH',
    SET_USER = 'AUTH/SET_USER',
    SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
    SET_ERROR = 'AUTH/SET_ERROR',
}

export type SetAuthActionType = {
    type: ACTIONS_TYPE.IS_AUTH;
    payload: boolean;
}

export type SetUserType = {
    type: ACTIONS_TYPE.SET_USER;
    payload: IUser;
}

export type SetIsLoadingType = {
    type: ACTIONS_TYPE.SET_IS_LOADING;
    payload: boolean
}

export type SetErrorType = {
    type: ACTIONS_TYPE.SET_ERROR;
    payload: string;
}

export type ActionsTypes2 = SetAuthActionType | SetUserType | SetIsLoadingType | SetErrorType;