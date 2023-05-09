import { useState,useContext } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs,{ Dayjs } from 'dayjs';
import { AppointContext } from '../contexts/AppointContext';



export default function DatePick() {

  const {dispatch}=useContext(AppointContext);

  type DateVal = Dayjs;
  type SetDateVal = React.Dispatch<React.SetStateAction<DateVal>>;
  type DateValState = [DateVal, SetDateVal];


  const [dateVal, setDateVal]:DateValState = useState(dayjs());

  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className='date-area' onChange={(newVal)=>newVal&&dispatch({type:'SET_DATE',payload:newVal.format('ddd/MM/DD/YYYY')})}  value={dateVal} orientation="landscape" />
    </LocalizationProvider>
  );
}