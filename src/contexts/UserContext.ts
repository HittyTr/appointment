import { createContext,useReducer } from 'react'
import {UserState} from "../types/types";

const initialState:UserState = {
    user: null,
    appointments: [],
    loading: false,
    error: false,
    success: false,
    message: ''}

export const UserContext = createContext(initialState)
