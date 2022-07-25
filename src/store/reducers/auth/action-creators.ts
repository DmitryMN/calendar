import {ACTIONS_TYPE} from './types';
import { IUser } from '../../../models/IUser';
import axios from 'axios';




// export const authActionCreators = {
//     setIsAuth:(isAuth: boolean) => ({
//         type: ACTIONS_TYPE.IS_AUTH, payload: isAuth
//     } as const),

//     setUser:(user: IUser) => ({
//         type: ACTIONS_TYPE.SET_USER, 
//         payload: user
//     } as const),

//     setIsLoading:(isLoading: boolean) => ({
//         type: ACTIONS_TYPE.SET_IS_LOADING, 
//         payload: isLoading
//     } as const),

//     setError:(error: string) => ({
//         type: ACTIONS_TYPE.SET_ERROR,
//         payload: error
//     } as const),

//     login: (username: string, password: string) => async (dispatch: AppDispatch) => {
//         try {
//             dispatch(authActionCreators.setIsLoading(true));
//             const mockUser = await axios.get('./users.json').then(data => (data));
//             console.log(mockUser);
//         } catch(e) {
//             dispatch(authActionCreators.setError("Произошла ошибка при логине"));
//         }
//     },

//     logout: () => async (dispatch: AppDispatch) => {
//         try {

//         } catch(e) {

//         }
//     },
// }
