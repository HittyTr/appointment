import { Doctor } from "../types/types";
import  Hours from "./Hours";
import {useContext} from 'react';
import { AppointContext } from "../contexts/AppointContext";
import { Col,Row } from "react-bootstrap";

type DoctorProps = {
    doctor: Doctor;
    hours: string[]|undefined;
    selectedDoctor: Doctor|null;
    handleSelectedDoctor?: (id:string) => void;
    };

const Personal = ({doctor,hours,selectedDoctor,handleSelectedDoctor}:DoctorProps, ) => {

    const {dispatch}=useContext(AppointContext);
    const handleClick = () => {
        handleSelectedDoctor!(doctor.id);
        dispatch({type:'SET_PERSONAL_ID',payload:doctor.id})
        dispatch({type:'SET_TIME',payload:''})
    }
    
    return (
        <Row  className="doctor-preview">
            <Col>
            <Row onClick={()=>handleClick()}>
                <h4>{doctor.name}</h4>
                <p>{doctor.specialty}</p>
            </Row>
           {selectedDoctor?.id===doctor.id&& <Row className="appointment-hours">
                {hours?.map((hour) =><Col xs={2}><Hours hour={hour} /></Col>)}
            </Row> }
            </Col>
         </Row>
    )
}

export default Personal;