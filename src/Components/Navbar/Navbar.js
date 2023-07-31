import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getTotals } from '../../Reducer/CartReducer';
import { useEffect, useState } from 'react';
import { actions } from '../../store';

function Navbar() {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const handleOnClick = () => {
        dispatch(actions.authActions.logout());
        dispatch(clearCart());
    }

    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch]);

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <Link to={"/"} className="navbar-brand h1 m-0" >The Electronic Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                        <ul className="navbar-nav mb-2 mb-lg-0 collap">
                            <form className="d-flex justify-content-center align-items-center " role="search">
                                <div className='searchbar' style={{ overflow: 'visible' }}>
                                    <li className="nav-item dropdown d-flex justify-content-center align-items-center" style={{ border: '1px black', backgroundColor: 'var(--col4)' }}>
                                        <a className="nav-link dropdown-toggle menu" style={{ color: 'black' }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark dm">
                                            <li><Link className='dropdown-item' to={'/headphones'}>Headphones</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link className='dropdown-item' to={'/mobiles'}>Mobiles</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link className='dropdown-item' to={'/laptops'}>Laptops</Link></li>
                                        </ul>
                                    </li>
                                    <input type="text" placeholder='search for products and categories' />
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                            <ul className='second'>
                                <ul className="navbar-nav justify-content-center align-items-center ">
                                    <li className="nav-item m-2">
                                        { isLoggedIn ? 
                                         (<Link className='menu d-flex justify-content-center align-items-center' to={'/home'} onClick={() => handleOnClick()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person simg" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                            <h6 className='m-0 ps-1' >Logout</h6>
                                        </Link>) : (<Link className='menu d-flex justify-content-center align-items-center' to={'/login'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person simg" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg>
                                            <h6 className='m-0 ps-1' >Login</h6>
                                        </Link>)
                                        }
                                    </li>
                                    <li className="nav-item m-2 cart shopping ">
                                        <Link className='menu d-flex justify-content-center align-items-center' to={'/cart'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3 simg" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                            </svg>
                                            <h6 className='m-0 ps-1'>Cart</h6>
                                        </Link>
                                        <span className='qty'>{cart.cartTotalQuantity}</span>
                                    </li>
                                    <li className="nav-item dropdown m-2">
                                        <a className="nav-link dropdown menu" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                            </svg>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-dark dm">
                                            <li><Link className='dropdown-item' to={'/about'}>About</Link></li>
                                            <hr className="dropdown-divider" />
                                            <li><Link className='dropdown-item' to={'/contact'}>Contact</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;