import React from 'react'
import { Alert } from 'react-bootstrap'

export default function ErrorMessage({text}) {
  return (
    <Alert variant="danger" className='text-center'>{text}</Alert>
  )
}
