import { AuthState, ACTIONS_TYPE, ActionsTypes2 } from "./types";
import { IUser } from "../../../models/IUser";
import {Action, AnyAction, Dispatch} from "redux";
import axios from "axios"
import { ThunkAction } from "redux-thunk";
import {RootState} from "../../index";
import {Context} from "react";
import {ReactReduxContextValue} from "react-redux/es/components/Context";


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
type ThunkDispatch = Dispatch<ActionsTypes2>


// thunk
export const loginTC = (username: string, password: string) => {
    return async (dispatch: ThunkDispatch) => {
        dispatch(setIsLoading(true));
        const mockUser =  await axios.get('./users.json');
        console.log(mockUser.data);
    }
}


