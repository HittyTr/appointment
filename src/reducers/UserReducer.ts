import {UserState,Action} from "../types/types";


export const UserReducer = (state:UserState , action:Action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.payload
            };
        case "SET_APPOINTMENTS":
            return {
                ...state,
                appointments: action.payload
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            };
        case "SET_SUCCESS":
            return {
                ...state,
                success: action.payload
            };
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
}