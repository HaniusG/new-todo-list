import React, { useState } from 'react'
import { ListGroup, FormCheck, Button} from 'react-bootstrap'
import {DeleteButton, EditButton} from '../../Buttons';
import SpecialDate from '../../SpecialDate';


export default function ToDoListItem({ text, important, done, id, date, deleteItem, onDoneOrImp, editItem }) {
    const onDelete = () => {
        deleteItem(id)
    } 
    
    const onDone = () => {
        onDoneOrImp(id, 'done')   
    }

    const onEdit = () => {
        editItem(id)
    }

    
    return (
        <ListGroup className="list-group-horizontal rounded-0 bg-transparent">
            <ListGroup.Item className=" d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
                <FormCheck checked={done} onChange={onDone}/>
            </ListGroup.Item>
            <ListGroup.Item className=" px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                <p className="lead fw-normal mb-0">{text}</p>
            </ListGroup.Item>
            {important ? <SpecialDate date={date}/>: null }
            <ListGroup.Item className=" ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                <div className="d-flex flex-row justify-content-end mb-1">
                    <EditButton onEdit={onEdit}/>
                    <DeleteButton onDelete={onDelete}/>
                    
                </div>
                <div className="text-end text-muted">
                    <a href="#!" className="text-muted">
                        <p className="small mb-0"><i className="fas fa-info-circle me-2"></i>{date}</p>
                    </a>
                </div>
            </ListGroup.Item>
        </ListGroup>
    )
}
