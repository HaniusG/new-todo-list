import React from 'react'
import { Button } from 'react-bootstrap'

export default function Header() {
  return (
    <div class="d-flex align-items-center m-3">
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Add new..."
    />
    <a href="#!" data-mdb-toggle="tooltip" aria-label="Set due date" data-mdb-original-title="Set due date"><i class="fas fa-calendar-alt fa-lg me-3"></i></a>

    <Button>Add</Button>

  </div>
  )
}
