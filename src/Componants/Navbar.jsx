import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './buttons/Cart'
import Login from './buttons/Login'
import Signup from './buttons/Signup'

export default function Navbar() {
    return (

        <>
            {/* <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navnar" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <div className="navbar-nav">
                            <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                            <Link className="nav-link" to={"/product"}>Product</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                        <a className="navbar-brand mx-auto fw-bold " href="#">APPLE MART</a>
                        <Login />
                        <Signup />
                        <Cart />
                    </div>
                </div>
            </nav> */}

            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link className="nav-link" aria-current="page" to={'/'}>Home</Link>
                            <Link className="nav-link" to={"/product"}>Product</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </div>
                        <a className="navbar-brand mx-auto fw-bold " href="#">APPLE MART</a>
                        <Login />
                        <Signup />
                        <Cart />
                    </div>
                </div>
            </nav>
        </>
    )
}
