import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Cart() {
    return (
        <>
            <NavLink to='/' className="btn btn-outline-primary ms-1">
                <span className='fa fa-shooping-cart me-1'></span>
                cart()
            </NavLink>
        </>
    )
}
