export type AuthState = {
    isAuth: boolean
}

export enum ACTIONS_TYPE {
    IS_AUTH = 'AUTH/IS_AUTH'
}

export type SetAuthAction = {
    type: ACTIONS_TYPE.IS_AUTH
    payload: {
        isAuth: boolean
    }
}

export type ActionsTypes = SetAuthAction;