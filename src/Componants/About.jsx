import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <h1 className='text-primary fw-bold mb-4' >About us</h1>
                        <p className='lead mb-4'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque est placeat enim laboriosam eum ad sunt itaque error nesciunt aliquam aut amet rerum reiciendis autem ea, facilis, deserunt nobis debitis in libero! Recusandae, maiores. Velit, nisi quam labore asperiores eveniet, architecto dolor autem facere dolores dolorum debitis error, voluptate enim omnis repellat? Exercitationem dolorem fugiat eum mollitia, officiis velit nobis delectus consectetur. Illum porro ratione molestias dicta voluptate iste sit.
                        </p>
                        <Link to={'/contact'}
                            className="btn btn-outline-primary px-3"
                        >Contact Us</Link>
                    </div>
                    <div className="col-md-6">
                        <img className='img--fluid' src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydGZvbGlvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700" alt="About us" height={'400px'} width={'400px'} />
                    </div>
                </div>
            </div>

        </>
    )
}
