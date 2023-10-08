import React from 'react'
import { FaPen } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';

export default function EditButton({onEdit}) {
    return (
        <Button onClick={onEdit} className='m-1'>
            <FaPen />
        </Button>
    )
}
