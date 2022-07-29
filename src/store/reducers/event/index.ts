import { EventState, EventActionsType, EventActions } from "./types";


const initialState: EventState = {
    guests: [],
    events: [],
}

export default function eventReducer(state: EventState = initialState, action: EventActionsType): EventState {
    switch(action.type) {
        case EventActions.SET_GUESTS:
            return {...state, guests: action.payload};
        case EventActions.SET_EVENTS:
            return {...state, events: action.payload};
        default:
            return state;
    }
}