import { AuthState, ACTIONS_TYPE, ActionsTypes2 } from "./types";
import { IUser } from "../../../models/IUser";
import { Dispatch } from "redux";
import axios from "axios"


const initialState: AuthState = {
    isAuth: false,
    user: {
        username: "alex",
        password: "123"
    },
    isLoading: false,
    error: "",
}

export default function authReducer(state = initialState, action: ActionsTypes2): AuthState {
    switch (action.type) {
        case ACTIONS_TYPE.IS_AUTH:
            return { ...state, isAuth: action.payload, isLoading: false };
        case ACTIONS_TYPE.SET_USER:
            return { ...state, user: action.payload };
        case ACTIONS_TYPE.SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case ACTIONS_TYPE.SET_ERROR:
            return { ...state, error: action.payload, isLoading: false };
        default:
            return state;
    }
}

// actions
export const setIsAuth = (isAuth: boolean) => ({
    type: ACTIONS_TYPE.IS_AUTH, payload: isAuth
} as const);

export const setUser = (user: IUser) => ({
    type: ACTIONS_TYPE.SET_USER,
    payload: user
} as const);

export const setIsLoading = (isLoading: boolean) => ({
    type: ACTIONS_TYPE.SET_IS_LOADING,
    payload: isLoading
} as const);

export const setError = (error: string) => ({
    type: ACTIONS_TYPE.SET_ERROR,
    payload: error
} as const);

// types
export type ActionsTypes1 = ReturnType<typeof setIsAuth> | ReturnType<typeof setUser> | ReturnType<typeof setIsLoading> | ReturnType<typeof setError>;

// thunk
export const loginTC = (username: string, password: string) => {
    return (dispatch: Dispatch<ActionsTypes2>) => {
        dispatch(setIsLoading(true));
        const mockUser = axios.get('./users.json').then(data => data.data);
        console.log(mockUser);
    }
}


