import React from 'react'
import Home from '../component/Home';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import Menspro from '../component/Menspro';
import Womenpr from '../component/Womenpr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../component/navbar';
import Footer from '../component/Footer';
import CartPage from '../pages/CartPage';

const MyRoute = () => {
    const pages= [
        { path:'/', exact:true, Component: Home},
        { path:'/login', exact: true, Component: Login },
        { path:'/signup', exact: true, Component: Signup },
        { path:'/menproduct', exact:true, Component: Menspro},
        { path:'/womenproduct', exact:true, Component: Womenpr},
        { path:'/cart', exact:true, Component: CartPage}
    ];
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            {pages.map(({Component,path,exact,auth})=>{
                return(
                    <Route
                        key={path}
                        element= {<Component/>}
                        path={path}
                    />
                )
            })}
        </Routes>   
        <Footer/> 
    </BrowserRouter>
  )
}

export default MyRoute