import { createContext,useReducer } from 'react'
import {Appointment} from "../types/types";
import {AppointReducer} from "../reducers/AppointReducer";

const initialState:Appointment = {
    id: '',
    user_id: '',
    person_id: '',
    date: '',
    time: '',
    message: '',
}
export const AppointContext = createContext<{state:Appointment,dispatch:React.Dispatch<any>;}>({state:initialState,dispatch:()=>null})

export const AppointProvider = ({children}:{ children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(AppointReducer, initialState)
    return ( 
        <AppointContext.Provider value={{state,dispatch}}>
            {children}
        </AppointContext.Provider>
    )
}

