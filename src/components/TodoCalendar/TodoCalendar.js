import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function DateCalendar({onCalChange, date}){
  
 

  return (
    <div >
      <Calendar onChange={onCalChange} value={date}/>  
    </div>
  );
};