import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Navbar from './Navbar';
import './components/fcm.css'
import Homecom from './components/Homecom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import Nonveg from './components/Nonveg';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import { OrderProvider } from './components/OrderContext';
import Veg from './components/Veg';
import Footer from './components/Footer';
import DineIn from './components/DineIn';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrderProvider>
    <AuthProvider>
    <BrowserRouter>
    <section className='nav-com'>
    <article className='sec-1'>
    <Navbar/>
    </article>
    <article className='sec-2'>
    <Routes>
      <Route path='/' element ={<Homecom/>}></Route>
{/*       <Route path='/categories' element ={<Categories/>}></Route>
 */}      <Route path='/nonveg' element ={<Nonveg/>}></Route>
      <Route path='/Cart' element ={<Cart/>}></Route>
      <Route path='/veg' element={<Veg/>}></Route>
      <Route path='/dinein' element={<DineIn/>}></Route>
      {/* <Route path='/login'  element={<Login/>}></Route> */}
      <Route path='/categories' element={<ProtectedRoute><Categories /></ProtectedRoute>} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
    </article>
    </section>
    <article>
      <Footer/>
    </article>
    </BrowserRouter>
    </AuthProvider>
    <ToastContainer position="top-center" />
    </OrderProvider>
  </React.StrictMode>
);
reportWebVitals();