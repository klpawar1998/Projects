import React from 'react'
import './Contact.css'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-us section my-5">
        <div className="container mt-5">
          <div className="contact-head mt-5">
            <div className="row mt-5">
              <div className="col-lg-8 col-12">
                <div className="form-main">
                  <div className="title">
                    <h4>Get in touch</h4>
                    <h3>Write us a message</h3>
                  </div>
                  <form className="form" method="post" action="mail/mail.php">
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <div className="form-group mb-3">
                          <label>Your Name<span>*</span></label>
                          <input name="name" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="form-group mb-3">
                          <label>Your Subjects<span>*</span></label>
                          <input name="subject" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 mb-3">
                        <div className="form-group">
                          <label>Your Email<span>*</span></label>
                          <input name="email" type="email" placeholder="" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 mb-3">
                        <div className="form-group">
                          <label>Your Phone<span>*</span></label>
                          <input name="company_name" type="text" placeholder="" />
                        </div>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-group message">
                          <label>Your message<span>*</span></label>
                          <textarea name="message" placeholder=""></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="btn">Send Message</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <div className="single-head">
                  <div className="single-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-plus" viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <h4 className="title">Call us Now:</h4>
                    <ul>
                      <span>+022 3456 7890</span>
                      <br />
                      <span>+022 3456 7891</span>
                    </ul>
                  </div>
                  <div className="single-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-open" viewBox="0 0 16 16">
                      <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882l-6-3.2ZM15 7.383l-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2Z" />
                    </svg>
                    <h4 className="title">Email:</h4>
                    <ul>
                      <span>info@theelectronicstore.com</span>
                      <br />
                      <span>support@theelectronicstore.com</span>
                    </ul>
                  </div>
                  <div className="single-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                    <h4 className="title">Our Address:</h4>
                    <ul>
                      <span>NO. 342 - The New India Street. <br />  
                        Mumbai - 400069. India. </span>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Contact --> */}

      {/* <!-- Map Section --> */}
      <div className="map-section">
        <div id="myMap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.215218746868!2d72.84961067357393!3d19.22944994714044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20classNamees%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20Alteryx%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter%20Training!5e0!3m2!1sen!2sin!4v1689344875426!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      {/* <!--/ End Map Section --> */}

      <Footer />

    </div>
  )
}

export default Contact