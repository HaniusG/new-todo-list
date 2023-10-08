import React from 'react'

export default function SpecialDate({date}) {
    return (
        <div className="py-2 px-3 me-2 border border-warning rounded-3 d-flex align-items-center bg-light">
            <p className="small mb-0">
                <a href="#!" data-mdb-toggle="tooltip" aria-label="Due on date" data-mdb-original-title="Due on date">
                    <i className="fas fa-hourglass-half me-2 text-warning"></i>
                </a>
                {date}
            </p>
        </div>
    )
}
