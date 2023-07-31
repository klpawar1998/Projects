import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <section className="shop-newsletter section">
                <div className="inner-top">
                    <div className="row m-0">
                        <div className="col-lg-8 offset-lg-2 col-12">
                            <div className="inner">
                                <h4>Newsletter</h4>
                                <p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
                                <form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
                                    <input name="EMAIL" placeholder="Your email address" required="" type="email" />
                                    <button className="btn">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Start Footer Area --> */}
            <footer className="footer">
                {/* <!-- Footer Top --> */}
                <div className="footer-top section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer about ">
                                    <div className="logo">
                                        <span>The Electronic Store</span>
                                    </div>
                                    <p className="text">Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue,  magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
                                    <p className="call">Got Question? Call us 24/7<span><a href="tel:123456789">+022 5456 8789</a></span></p>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer links">
                                    <h4>Information</h4>
                                    <ul className='p-0'> 
                                        <li>Faq</li>
                                        <li>About Us</li>
                                        <li>Terms & Conditions</li>
                                        <li>Contact Us</li>
                                        <li>Help</li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-2 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer links">
                                    <h4>Customer Service</h4>
                                    <ul className='p-0'>
                                        <li>Payment Methods</li>
                                        <li>Money-back</li>
                                        <li>Returns</li>
                                        <li>Shipping</li>
                                        <li>Privacy Policy</li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                {/* <!-- Single Widget --> */}
                                <div className="single-footer social">
                                    <h4>Get In Tuch</h4>
                                    {/* <!-- Single Widget --> */}
                                    <div className="contact">
                                        <ul className='p-0'>
                                            <li>NO. 342 - The New India Street.</li>
                                            <li>Mumbai - 400069. India. </li>
                                            <li className='e'>info@theelectronicstore.com</li>
                                            <li className='n'>+022 3456 7890</li>
                                        </ul>
                                    </div>
                                    {/* <!-- End Single Widget --> */}
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                        <li><a href="#"><i className="ti-twitter"></i></a></li>
                                        <li><a href="#"><i className="ti-flickr"></i></a></li>
                                        <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                                {/* <!-- End Single Widget --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Footer Top --> */}
                <div className="copyright">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-6 col-12">
                                    <div className="left">
                                        <p>Copyright © 2023 <span>theelectronicstore.com</span>  -  All Rights Reserved.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="right">
                                        <img src="https://wpthemesgrid.com/themes/free/eshop/images/payments.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer