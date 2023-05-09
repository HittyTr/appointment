import React, { useState } from "react";
import AppointmentReq from "./AppointmentReq";
import UserList from "./UserList";
import Popup from "./Popup";

const Home = () => {
    const [popup, setPopup] = useState<boolean>(false);

    const handlePopup = () => {
        setPopup(!popup);
    }
    
    return (
        <div>
            <h1>Home</h1>
            <AppointmentReq handlePopup={handlePopup}/>
            {popup && <Popup handlePopup={handlePopup}/>}
        </div>
    )

}

export default Home;