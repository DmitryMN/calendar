import { AuthState, ACTIONS_TYPE, ActionsTypes } from "./types";


const initialState: AuthState = {
    isAuth: false,
}

export default function authReducer(state = initialState, action: ActionsTypes): AuthState {
    switch (action.type) {
        case ACTIONS_TYPE.IS_AUTH:
            return {...state, isAuth: action.payload.isAuth}
        default:
            return state;
    }
}

export const changeIsAuth = (isAuth: boolean) => ({type: ACTIONS_TYPE.IS_AUTH, payload: {isAuth}});
