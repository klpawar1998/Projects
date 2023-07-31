import React, { useEffect, useState } from 'react'
import './FeaturedProducts.css'
import img1 from '../../../Assests/iphone14pro.avif'
import ProductCard from '../ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const FeatuedProducts = () => {

    // const { products } = useSelector((state) => state.products);
    // console.log("👌👌products", products);

    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);

    const getAllProducts = createAsyncThunk("getAllproducts", async (args, { rejectWithValue }) => {
        const response = await axios.get(`http://localhost:8091/products/homeProducts`);
        try {
            console.log(response.data);
            setProduct(response.data);
            return response.data;
        } catch (error) {
            rejectWithValue(error);
        }
    })

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])

    return (
        <div className='container mb-5'>
            <div className='card e'>
                <div className='featured' >
                    <div className="row p-0 m-0">
                        <h1 style={{ textAlign: 'center' }}>Featured Products</h1>

                        {
                            product.map((item, index) => {
                                return (
                                    <div className='col-lg-4'>
                                        <ProductCard data={item} key={index} />
                                    </div>
                                )
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )


}

export default FeatuedProducts