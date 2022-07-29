import { IUser } from "../../../models/IUser";
import { IEvent } from "../../../models/IEvent";

export type EventState = {
    guests: IUser[];
    events: IEvent[];
}

export enum EventActions {
    SET_GUESTS = 'EVENT/SET_GUESTS',
    SET_EVENTS = 'EVENT/SET_EVENT',
}

export type SetGuests = {
    type: EventActions.SET_GUESTS;
    payload: IUser[]
}

export type SetEvents = {
    type: EventActions.SET_EVENTS;
    payload: IEvent[]
}

export type EventActionsType = SetEvents | SetGuests;
