import React, { useEffect } from 'react'
import { getProducts } from '../../Reducer/ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../../Components/Product/ProductCard/ProductCard';
import ShopServices from '../../Components/ShopServices/ShopServices';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

const Mobiles = () => {

    const { products, loading, searchDataState } = useSelector((state) => state.products);
    console.log("👌👌products", products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts(2));
    }, [])

    return (
        <div>
            <Navbar />
            <div className='container head'>
                <div className='card'>
                    <div className='product' >
                        <div className="row p-0 m-0">
                            <h1 style={{ textAlign: 'center' }}>Mobiles</h1>

                            {
                                products.map((item, index) => {
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
            <ShopServices />
            <Footer />
        </div >
    )
}

export default Mobiles