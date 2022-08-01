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
    },

    createEvent: (event: IEvent) => async (dispatch: ThunkDispatch) => {
        try {
            const events = localStorage.getItem('events') || '[]';
            const json = JSON.parse(events) as IEvent[];
            json.push(event);
            dispatch(eventActionCreators.setEvents(json));
            localStorage.setItem('events', JSON.stringify(json));
        } catch(e) {
            console.log();
        }
    }
}

type ThunkDispatch = Dispatch<AppAction>;