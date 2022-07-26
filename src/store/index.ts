import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk'
import authReducer from './reducers/auth';

const rootReducer = combineReducers({
    isAuth: authReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;

export type AppAction = ReturnType<typeof store.dispatch>;

export type AppDispatch = ThunkDispatch<RootState, any, AppAction>;