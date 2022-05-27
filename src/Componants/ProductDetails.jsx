import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function productDetails() {
    const [product, setproduct] = useState({})


    const getSingleProduct = async () => {
        const { data } = await axios.get(`http://localhost:4800/products/${id}`)
        setproduct(data)

    }
    useEffect(() => {

        getSingleProduct()

    }, [])

    const { id } = useParams()

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <img src={product.img} alt="" />
                    </div>
                    <div className="col-sm-6"> {product.title} </div>
                    <hr />
                    <h2>{product.price}</h2>
                </div>
            </div>
        </>
    )
    } 