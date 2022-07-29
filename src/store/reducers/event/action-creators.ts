import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActions } from "./types";
import {Dispatch} from "redux";
import {AppAction} from "../../index"
import { userApi } from "../../../api/UserApi";

export const eventActionCreators = {
    setGuests: (guests: IUser[]) => ({
        type: EventActions.SET_GUESTS,
        payload: guests,
    } as const),

    setEvents: (events: IEvent[]) => ({
        type: EventActions.SET_EVENTS,
        payload: events,
    } as const),

    fetchUsers: () => async (dispatch: ThunkDispatch) => {
        try {
            const response = await userApi.getUsers();
            dispatch(eventActionCreators.setGuests(response.data));
        } catch (e) {
            console.log(e);
        }
    }
}

type ThunkDispatch = Dispatch<AppAction>;