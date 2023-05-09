import {Appointment} from '../types/types'
type AppointAction =
    | { type:'SET_USER';payload: {user:string,id:string} }
    | { type:'SET_DATE';payload: string }
    | { type:'SET_TIME';payload: string }
    | { type:'SET_PERSONAL_ID';payload: string }
    | { type:'SET_MESSAGE';payload: string }
    | { type:'RESET' }


export const AppointReducer = (state:Appointment, action:AppointAction) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user_id: action.payload.user,
                id: action.payload.id,
                person_id: '',
                time: '',
                message: ''
            }
        case 'SET_DATE':
            return {
                ...state,
                date: action.payload
            }
        case 'SET_TIME':
            return {
                ...state,
                time: action.payload
            }
        case 'SET_PERSONAL_ID':
            return {
                ...state,
                person_id: action.payload
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case 'RESET':
            return {
                ...state,
                user_id: '',
                id: '',
                person_id: '',
                date: '',
                time: '',
                message: ''
            }
        default:
            return state
    }
}