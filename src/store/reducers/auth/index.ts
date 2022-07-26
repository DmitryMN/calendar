import { AuthState, ACTIONS_TYPE, AuthActionsType } from "./types";

const initialState: AuthState = {
    isAuth: false,
    user: {
        username: "alex",
        password: "123"
    },
    isLoading: false,
    error: "",
}

export default function authReducer(state = initialState, action: AuthActionsType): AuthState {
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


