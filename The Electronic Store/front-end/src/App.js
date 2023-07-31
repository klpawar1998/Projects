import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SingleProduct from './Pages/ProductPage/SingleProduct';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Checkout/Checkout';
import Headphones from './Pages/Categories/Headphones';
import Mobiles from './Pages/Categories/Mobiles';
import Laptops from './Pages/Categories/Laptops';
import RegisterForm from './Components/SignIN/Register';
import Login from './Components/SignIN/Login';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './Components/ScrollToTop';


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products/product/:prodid' element={<SingleProduct />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/mobiles' element={<Mobiles />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='*' element={<div><h1>404 Not Found</h1></div>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
