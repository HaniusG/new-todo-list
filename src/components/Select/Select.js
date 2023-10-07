import React from 'react'
import { Form } from 'react-bootstrap'
export default function Select({name, options}) {
  return (
    <div className='d-flex m-2'>
    <p className='m-1'>{name}</p>
    <Form.Select >
      <option selected>{options}</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </div>
    
  )
}
