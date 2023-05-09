import  {useEffect, useState} from 'react';
import { useContext } from 'react';
import { AppointContext } from '../contexts/AppointContext';
type HoursProps = {
    hour: string; 
}

const Hours = ({hour}:HoursProps) => {
    const [available, setAvailable] = useState<boolean>(true);
    const {state,dispatch}=useContext(AppointContext);
    useEffect(() => { //check if the hour is available or not. *to do - check if the hour is available for the selected doctor
        
        if (hour === 'Lunch') {
            setAvailable(false);
        }
        else if (state.date.includes('Sun')||state.date.includes('Sat')) {
            setAvailable(false);
        }
        else {
            setAvailable(true);
        }
    }, [hour,state.date])
    return (
        <div ><button className='hour-btn' onClick={()=>dispatch({type:'SET_TIME',payload:hour})}  disabled={!available}>{hour}</button></div>
    )
}

export default Hours;