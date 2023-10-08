import React from 'react'
import { Form } from 'react-bootstrap'
export default function Filter({onFilterChange}) {

  const onSelect = (e)=>{
    onFilterChange(e.target.value)
    console.log(e.target.value);

  }
  return (
    <div className='d-flex m-2'>
    <p className='m-1'>Filter</p>
    <Form.Select onChange={onSelect}>
      <option selected>All</option>
      <option value="Done">Done</option>
      <option value="Important">Important</option>
    </Form.Select>
    </div>
    
  )
}
