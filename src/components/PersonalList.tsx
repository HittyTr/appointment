import {doctors} from '../personalData/doctors';
import {useState} from 'react';
import Personal from './Personal';
import { Doctor } from '../types/types';
import { Col } from 'react-bootstrap';

type PersonalListProps = {
    department: string,
}
const PersonalList = ({department}:PersonalListProps) => {
    type getHoursType = () => string[]|undefined;
   
    const [selectedDoctor, setSelectedDoctor] = useState<Doctor|null>(null) ;

    
    const getHours:getHoursType = () => {
        let hours = [];
        for (let i = 0; i < 9; i++) {
            if (i === 4) {
                hours.push('Lunch')
            }
           else if(i===8){
            return hours;
           }
            else {
                hours.push(`${i + 8}:00`)
            }
        }
    }
    const handleSelectedDoctor = (id:string) => {
        const doctor = doctors.find((doctor) => doctor.id === id);
        doctor&&setSelectedDoctor(doctor);
    }

    return (
        <Col>
        {doctors.map((doctor) => {
            if (doctor.specialty === department) {
                return <Personal  
                handleSelectedDoctor={handleSelectedDoctor} 
                selectedDoctor={selectedDoctor} 
                doctor={doctor} 
                hours={getHours()} 
                key={doctor.id}
                />
            }
            else {
                return null;
            }
        })}
                
        </Col>
            
        
    )
}

export default PersonalList;