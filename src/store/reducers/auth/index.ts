import { IUser } from "../../../models/IUser";
import { AuthState, ACTIONS_TYPE, ActionsTypes } from "./types";


const initialState: AuthState = {
    isAuth: false,
    user: {
        username: "alex",
        password: "123"
    },
    isLoading: false,
    error: "",
}

export default function authReducer(state = initialState, action: ActionsTypes): AuthState {
    switch (action.type) {
        case ACTIONS_TYPE.IS_AUTH:
            return {...state, isAuth: action.payload.isAuth};
        case ACTIONS_TYPE.SET_USER:
            return {...state, user: action.payload.user};
        case ACTIONS_TYPE.SET_IS_LOADING:
            return {...state, isLoading: action.payload.isLoading};
        case ACTIONS_TYPE.SET_ERROR:
            return {...state, error: action.payload.error};           
        default:
            return state;
    }
}

export const changeIsAuth = (isAuth: boolean) => ({type: ACTIONS_TYPE.IS_AUTH, payload: {isAuth}});

export const setUser = (user: IUser) => ({
    type: ACTIONS_TYPE.SET_USER, 
    payload: {user}
});

export const setIsLoading = (isLoading: boolean) => ({
    type: ACTIONS_TYPE.SET_IS_LOADING, 
    payload: {isLoading}
});

export const setError = (error: string) => ({
    type: ACTIONS_TYPE.SET_ERROR,
    payload: {error}
});