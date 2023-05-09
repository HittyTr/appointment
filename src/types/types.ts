export type user = {
    id: number,
    name: string,
    email: string,
}

export type Appointment = {
    id: string,
    date: string,
    time: string,
    user_id: string,
    person_id: string,
    message: string
}

export type UserState = {
    user: user | null,
    appointments: Appointment[],
    loading: boolean,
    error: boolean,
    success: boolean,
    message: string
}

export type Action = {
    type: string,
    payload: any
}

export type  Doctor = {
    id: string,
    name: string,
    specialty: string,
    appointments: {},
}

export type  HandlePopup= {
    handlePopup: () => void
    }