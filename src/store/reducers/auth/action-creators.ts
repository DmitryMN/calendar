import {ACTIONS_TYPE} from './types';
import { IUser } from '../../../models/IUser';
import { AppDispatch } from '../../index';
import { Dispatch } from 'redux';
import { ActionsTypes } from './types';


export const authActionCreators = {
    setIsAuth:(isAuth: boolean) => ({
        type: ACTIONS_TYPE.IS_AUTH, payload: isAuth
    } as const),    
    setUser:(user: IUser) => ({
        type: ACTIONS_TYPE.SET_USER, 
        payload: user
    } as const),    
    setIsLoading:(isLoading: boolean) => ({
        type: ACTIONS_TYPE.SET_IS_LOADING, 
        payload: isLoading
    } as const),
    setError:(error: string) => ({
        type: ACTIONS_TYPE.SET_ERROR,
        payload: error
    } as const),
    login: (username: string, password: string) => async (dispatch: Dispatch<ActionsTypes>) => {
        try {
            dispatch(authActionCreators.setIsLoading(true));
        } catch(e) {
            dispatch(authActionCreators.setError("Произошла ошибка при логине"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {

        } catch(e) {

        }
    },
}
