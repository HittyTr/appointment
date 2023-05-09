import PersonalList from './PersonalList';
import DatePick from './DatePick';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Form,Container,Col,Row } from 'react-bootstrap';
import { doctors } from '../personalData/doctors';
import { useContext } from 'react';
import { AppointContext } from '../contexts/AppointContext';
import {HandlePopup} from '../types/types'

type validation = {
    validateWarn:string,
    isValid:boolean
}

const AppointmentReq = ({handlePopup}:HandlePopup) => {
    
    const [department, setDepartment] = useState<string>('');
    const {dispatch,state}=useContext(AppointContext);
    const [datePickWarn, setDatePickWarn] = useState<boolean>(false);
    const [validation, setValidation] = useState<validation>({validateWarn:'', isValid:false});

    useEffect(() => {
        dispatch({type:'SET_USER',payload:{user:'1',id:uuidv4()}}) // eslint-disable-next-line
    }, [department])

        
    const handleDepartment = (department:string) => {
            setDepartment(department);
           
        }
    const getDepartment = () => {
        let departments:string[] = [];
        doctors.forEach((doctor) => {
            if (!departments.includes(doctor.specialty)) {
                departments.push(doctor.specialty);
            }
        })
        return departments;
        }

    const handleSubmit = () => {
        if (validation.isValid === true) {
            handlePopup();
        }

    }
    
    const validate = () => { // write user context
        if (state.date === '') {
            setValidation({validateWarn:'Please pick a date',isValid:false});
        }
        else if(department===''){
            setValidation({validateWarn:'Please choose a department',isValid:false});
        }
        else if (state.person_id === '') {
            setValidation({validateWarn:'Please choose a doctor',isValid:false});
        }
        else if (state.time === '') {
            setValidation({validateWarn:'Please pick a time',isValid:false});
        }
        else {
            setValidation({validateWarn:'',isValid:true});
        }
    }
    const handleWarntoPickDate = () => {
        if (state.date === '') {
            setDatePickWarn(true);
        }
        else {
            return null;
        }
    }

    useEffect(() => {
        setDatePickWarn(false);
    }, [state.date])

    useEffect(() => {
     validate();// eslint-disable-next-line
    }, [state.date,state.time,state.person_id,department])

    return (
        <Container>
        <Row>
            <Col className='deparments-form' onClick={handleWarntoPickDate}>
                <Form>
                    <Form.Select className='deparments-select'  disabled={state.date===''} onChange={(e)=>handleDepartment(e.target.value)} >
                        <option value={''}>Choose a department</option>
                        {getDepartment().map((specialty) => <option value={specialty} key={specialty}>{specialty}</option>)}
                    </Form.Select>
                    {datePickWarn && <p>Please pick a date</p>}
                </Form>
            </Col>
            <Col>
                <DatePick />
            </Col>
        </Row>
        <Row>
            <PersonalList  department={department}/>
            <Col className='appointment-preview'>
                <Row>
                    <p className='appointment-preview-title'>Appointment Details</p>
                </Row>
                <Row >
                   <p><span className='appointment-preview-desc'>Doctor:</span>  {state.person_id!==''&&doctors.find((doctor)=>doctor.id===state.person_id)?.name}</p>
                </Row>
                <Row >
                   <p><span className='appointment-preview-desc'>Department:</span>  {department}</p>
                </Row >
                <Row >
                   <p><span className='appointment-preview-desc'>Date and Time:</span>  {state.date} {state.time}</p>
                </Row>
            </Col>
        </Row>
        <Row className='submit-btn-area'>
            <Col xs={3}>
                <button onClick={handleSubmit}>Book Appointment</button>
                {validation.validateWarn!==''&&<p>{validation.validateWarn}</p>}
            </Col>
        </Row>
        </Container>
    )
}

export default AppointmentReq;