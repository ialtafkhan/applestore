import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DATA from './Data'


export default function Product() {
    const [product, setproduct] = useState([])



    // const cartItem = (Item) => {
    //     return (
    //         <div class="card " style={{ width: "18rem" }}>
    //             <img src={Item.img} alt={Item.name} className='card-img-top' />

    //             <div class="card-body">
    //                 <h5 className='card-title'>{Item.title} </h5>
    //                 <p className='lead'>{Item.price}</p>


    //             </div>

    //         </div>
    //     )

    // }
    const products = async () => {
        const { data } = await axios.get("http://localhost:4800/products")
        console.log(data);
        setproduct(data)
    }
    useEffect(() => {
        products()
    }, [])

    return (

        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1>product</h1>
                        <hr />

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">



                    {
                        product.map(item => <div key={item.id} class="card my-5 py-4 " style={{ width: "18rem", marginLeft: '10px' }}>
                            <img src={item.img} alt={item.name} className='card-img-top' />

                            <div class="card-body text-center">
                                <h5 className='card-title'>{item.title} </h5>
                                <p className='lead'>{item.price}</p>
                                <Link to={`/products/${item.id}`}></Link>
                                <a href="" className='btn btn-outline-primary'>buy Now</a>
                                <Link to={'/'} product={product} ></Link>

                            </div>

                        </div>
                        )
                    }

                </div>

            </div>




        </>

    )
}
