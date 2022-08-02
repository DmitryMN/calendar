import { ACTIONS_TYPE } from './types';
import { IUser } from '../../../models/IUser';
import { Dispatch } from 'redux';
import { AppAction } from '../../index';
import { userApi } from '../../../api/UserApi';


export const authActionCreators = {
    setIsAuth: (isAuth: boolean) => ({
        type: ACTIONS_TYPE.IS_AUTH, payload: isAuth
    } as const),

    setUser: (user: IUser) => ({
        type: ACTIONS_TYPE.SET_USER,
        payload: user
    } as const),

    setIsLoading: (isLoading: boolean) => ({
        type: ACTIONS_TYPE.SET_IS_LOADING,
        payload: isLoading
    } as const),

    setError: (error: string) => ({
        type: ACTIONS_TYPE.SET_ERROR,
        payload: error
    } as const),

    login: (username: string, password: string) => async (dispatch: ThunkDispatch) => {
        try {
            dispatch(authActionCreators.setIsLoading(true));
            setTimeout(async () => {
                const response = await userApi.getUsers();
                const mockUser = response.data.find(user => user.username === username && user.password === password);
                if (mockUser) {
                    localStorage.setItem('auth', 'true');
                    localStorage.setItem('username', mockUser.username);
                    dispatch(authActionCreators.setUser(mockUser));
                    dispatch(authActionCreators.setIsAuth(true));
                } else {
                    dispatch(authActionCreators.setError('Неправильный логин или пароль'));
                }
                dispatch(authActionCreators.setIsLoading(false));
            }, 1000);
            
        } catch (e) {
            dispatch(authActionCreators.setError('Произошла ошибка при логине'));
        }
    },

    logout: () => async (dispatch: ThunkDispatch) => {
        localStorage.removeItem('auth');
        localStorage.removeItem('username');
        dispatch(authActionCreators.setUser({} as IUser));
        dispatch(authActionCreators.setIsAuth(false));
    },
}

type ThunkDispatch = Dispatch<AppAction>
