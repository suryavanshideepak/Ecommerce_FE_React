import React, { useState } from "react";
import axios from "axios";
import {NavLink, useNavigate} from 'react-router-dom'
import { useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [searchData,setSearchData] = useState("")
  const navigate = useNavigate()
  const [data,setData] = useState([])
  const handleSearch = (e) =>{
    setShow(true)
    setSearchData(e.target.value)
  }
  useEffect(() => {
    axios.get(`http://localhost:4500/user/search/${searchData?searchData:''}`).then((res)=> {
      setData(res.data)
     })
     .catch(err => {
       console.log(err)
     })
  },[searchData])
  console.log(data)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light nav_main">
        <h1 className="px-3 nav">
        BucketFull
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mx-auto mt-2 mt-lg-0">
          <li className="nav-item ">
              <NavLink className="nav-link " to={'/'}>
                <h6>Home</h6>
              </NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink className="nav-link " to={'/womenproduct'}>
              <h6>Women Products</h6>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/menproduct'}>
              <h6>Men Products</h6>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-20 ms-5">
          <input className="form-control px-5" placeholder="search product" value={searchData} onChange={handleSearch}/>
          <div className={show ? "bg-white text-dark input_search" : "display-block"}>
              {data ? data.map((item,index) => {
                return(
                <ul key={index}>
                <li>{item.title}</li>
                </ul>
                )
              }): <li>No result Found</li>}
          </div>
        </div>

        <div className="collapse navbar-collapse fav-login" id="navbarTogglerDemo02">
          <ul className="navbar-nav my-2 mt-2 mt-lg-0 me-5 ms-auto">
            <li className="nav-item d-flex justify-content-center align-items-center">
          <div className="me-4 addtocart">
            <i className="fa-solid fa-cart-shopping" onClick={()=>{navigate('/signup')}}>+{0}</i>
          </div>
              <i className="fa-solid fa-right-to-bracket "></i>
              <NavLink className="nav-link me-3" to={'/login'}>
                Login
              </NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-user-plus"></i>
              <NavLink className="nav-link " to={'/signup'}>
              Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
