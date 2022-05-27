import React, { useState, useEffect } from 'react'
import Product from './Product'
import axios from 'axios'

export default function Home() {
    const [product, setproduct] = useState()




    const products = async () => {
        const { data } = await axios.get("http://localhost:4800/products")
        console.log(data);
        setproduct(data)
    }
    useEffect(() => {
        products()
    }, [])
    return (
        <div>

            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1">

                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">

                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">

                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">

                    </button>
                </div>
                <div class="carousel-inner">
                </div>
                <div class="carousel-item">
                    <img src="https://rukminim1.flixcart.com/image/416/416/kgiaykw0/mobile/y/n/y/apple-iphone-11-mhda3hn-a-original-imafwqepdb3fxtug.jpeg?q=70" class="d-block w-100" alt="..." height={300} width={100} />
                </div>
                <div class="carousel-item active">
                    <img src="https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/2/g/r/-original-imagca5kqvhuscnv.jpeg?q=70" class="d-block w-100" alt="..." height={300} width={100} />

                </div>
                <div class="carousel-item">
                    <img src="https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/2/g/r/-original-imagca5kqvhuscnv.jpeg?q=70" class="d-block w-100" alt="..." height={300} width={100} />
                </div>
                <div class="carousel-item">
                    <img src="https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/2/g/r/-original-imagca5kqvhuscnv.jpeg?q=70" class="d-block w-100" alt="..." height={300} width={100} />
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
