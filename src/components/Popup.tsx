import {useContext,useEffect,useState} from 'react';
import { AppointContext } from "../contexts/AppointContext";
import {HandlePopup} from '../types/types';
import {doctors} from '../personalData/doctors';
import {Doctor} from '../types/types';


const Popup = ({handlePopup}:HandlePopup) => {
    const [doctor, setDoctor] = useState<Doctor>({id:'',name:'',specialty:'',appointments:{}}); //fetch from firebase
    const {state,dispatch}=useContext(AppointContext);
    const handleClick = () => {
       handlePopup();
        dispatch({type:'RESET'})
        window.location.reload();
    }
    useEffect(() => {
        getDepartment();// eslint-disable-next-line
    }, [])

    const getDepartment = () => {
        doctors.find((doctor) => {
            if (doctor.id === state.person_id) {
                setDoctor(doctor);
            }
            else {
                return '';
            }
            return null;
        })
        }

    return (
        <div className="popup">
            <div className="overlay"></div>
            <div className="popup-content">
                <h2>Appointment scheduled!</h2>
                <p>{doctor.name} will see you on {state.date} at {state.time} in {doctor.specialty} department.</p>
                <button className='close-btn' onClick={()=>handleClick()}>X</button>
            </div>
        </div>
    )
}

export default Popup
