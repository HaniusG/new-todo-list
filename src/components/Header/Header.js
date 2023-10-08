import React from 'react'
import {FaCheck, FaCalendar} from 'react-icons/fa6'

export default function Header() {
  return (
    <div  className="text-center justify-content-center align-items-center h1 text-primary">
        <FaCheck/>
        <u>My Todo-s</u>
    </div>
  )
}
