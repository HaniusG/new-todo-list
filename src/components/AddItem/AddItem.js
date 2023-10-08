import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import {FaCalendar} from 'react-icons/fa6'

export default function AddItem({onCalClick, inputValue, onInputChange, onAddItem}) {
  

  return (
    <div className="shadow  bg-white d-flex align-items-center m-3 p-2">
    <input
      value={inputValue}
      onChange={onInputChange}
      type="text"
      className="form-control form-control-lg border-0"
      placeholder="Add new..."
    />
    <div  onClick={onCalClick} className='pe-auto d-flex text-primary m-2 text-center align-items-center justify-content-center h2'> <FaCalendar/></div>
    <Button onClick={onAddItem}>Add</Button>

  </div>
  )
}
