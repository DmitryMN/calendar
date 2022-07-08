import { IUser } from "../../../models/IUser"

export type AuthState = {
    isAuth: boolean
    user: IUser
    isLoading: boolean
    error: string
}

export enum ACTIONS_TYPE {
    IS_AUTH = 'AUTH/IS_AUTH',
    SET_USER = 'AUTH/SET_USER',
    SET_IS_LOADING = 'AUTH/SET_IS_LOADING',
    SET_ERROR = 'AUTH/SET_ERROR',
}

export type SetAuthAction = {
    type: ACTIONS_TYPE.IS_AUTH
    payload: {
        isAuth: boolean
    }
}

export type SetUser = {
    type: ACTIONS_TYPE.SET_USER,
    payload: {
        user: IUser
    }
}

export type SetIsLoading = {
    type: ACTIONS_TYPE.SET_IS_LOADING,
    payload: {
        isLoading: boolean
    }
}

export type SetError = {
    type: ACTIONS_TYPE.SET_ERROR,
    payload: {
        error: string
    }
}

export type ActionsTypes = SetAuthAction | SetUser | SetIsLoading | SetError;