import React from 'react'
import { Form } from 'react-bootstrap'
export default function Sort({onSortChange}) {

  const onSelect = (e)=>{
    onSortChange(e.target.value)
  }

  return (
    <div className='d-flex m-2'>
    <p className='m-1'>Sort</p>
    <Form.Select onChange={onSelect}>
      <option selected value='Newest first'>Newest first</option>
      <option value="Oldest first">Oldest first</option>
    </Form.Select>
    </div>
    
  )
}
