import React from 'react'
import { FaTrash } from 'react-icons/fa6';
import { Button } from 'react-bootstrap';

export default function DeleteButton() {
    return (
        <Button className='m-1' variant='danger'>
            <FaTrash />
        </Button>
    )
}
