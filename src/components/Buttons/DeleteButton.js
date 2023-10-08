import React from 'react'
import { FaTrash } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';

export default function DeleteButton({onDelete}) {
    return (
        <Button className='m-1' variant='danger' onClick={onDelete}>
            <FaTrash />
        </Button>
    )
}
