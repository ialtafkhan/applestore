import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="col-12 text-center py-4 my-4">
                            <h1>have some quastions</h1>
                            <hr />

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-5 d-flex justify-content-center ">
                            <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1haWxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700" alt="Contact us" height={"300px"} width={"300px"} />
                        </div>
                        <div className="col-md-5">
                            <form>
                                <div class="form-group">
                                    <label for="exampleForm" className='form-label' >Full label</label>
                                    <input type="email" class="form-control" id="exampleForm" placeholder="john smith" />

                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                                </div>

                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">send message</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
