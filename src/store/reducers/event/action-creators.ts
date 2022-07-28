import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActions } from "./types";


export const eventActionCreators = {
    setGuests: (guests: IUser[]) => ({
        type: EventActions.SET_GUESTS,
        payload: guests,
    } as const),

    setEvents: (events: IEvent[]) => ({
        type: EventActions.SET_EVENTS,
        payload: events,
    }),    
}