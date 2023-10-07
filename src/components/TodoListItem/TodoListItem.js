import React from 'react'
import { ListGroup, FormCheck, Button} from 'react-bootstrap'
import { FaTrash, FaPen } from 'react-icons/fa6';

export default function ToDoListItem() {
    return (
        <ListGroup className="list-group-horizontal rounded-0 bg-transparent">
            <ListGroup.Item className=" d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <FormCheck >
                </FormCheck>
            </ListGroup.Item>
            <ListGroup.Item className=" px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className="lead fw-normal mb-0">Buy groceries for next week</p>
            </ListGroup.Item>
            <ListGroup.Item className=" ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <Button className='m-1'>
                        <FaPen/>
                    </Button>
                    <Button className='m-1' variant="danger">
                    <FaTrash/>
                    </Button>

                    
                    
                </div>
                <div className="text-end text-muted">
                    <a href="#!" className="text-muted">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>28th Jun 2020</p>
                    </a>
                </div>
            </ListGroup.Item>
        </ListGroup>
    )
}
