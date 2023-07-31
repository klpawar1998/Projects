import './ProductCard.css'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addIntoCart } from '../../../Reducer/CartReducer';
import { toast } from 'react-toastify'

const ProductCard = ({ data }) => {

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleAddToCart = (data) => {
        dispatch(addIntoCart(data));
        toast(<p className='m-0'>Product added to cart &#128525;</p>, {
            position: "bottom-left",
        })
    };

    return (
        <div className="single-product">
            <div className="product-img" >
                <Link to={`/products/product/${data.productId}`}>
                    <img className='p-3' src={data.productImage} alt="no img" />
                </Link>

                <div className="button-head">
                    <div className="product-action-2">
                        <span onClick={() => {isLoggedIn ? handleAddToCart(data) :
                            toast(<p className='m-0'>Please login to continue &#128517;</p>, {
                                position: "bottom-left",
                            })}}>Add to cart</span>
                    </div>
                </div>
            </div>
            <div className="product-content">
                <Link className='h5' to={`/products/product/${data.productId}`} >{data.productName}</Link>
                <div className="product-price">
                    <span>Rs.{data.productPrice}/-</span>
                </div>
            </div>
        </div >
    )
}


export default ProductCard