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
            return {...state, isAuth: action.payload.isAuth, isLoading: false};
        case ACTIONS_TYPE.SET_USER:
            return {...state, user: action.payload.user};
        case ACTIONS_TYPE.SET_IS_LOADING:
            return {...state, isLoading: action.payload.isLoading};
        case ACTIONS_TYPE.SET_ERROR:
            return {...state, error: action.payload.error, isLoading: false};           
        default:
            return state;
    }
}

