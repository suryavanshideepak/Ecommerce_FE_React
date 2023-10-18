import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../utility/Loader";
import "./myStyle.css";

const Menspro = () => {
  const [input, setInput] = useState([]);
  const [loader, setLoader] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const getApi = async () => {
    setLoader(true)
    axios.get(`http://localhost:4500/user/upload`).then((response)=>{
      setLoader(false)
      setInput(response.data);
    })
    .catch(()=>{
      setLoader(false)
    })
  };

  const handleCart = (item) => {
    console.log(item)
    setShoppingCart([...item,item])
  }
  console.log(input)
  useEffect(() => {
    getApi();
    localStorage.setItem("item",JSON.stringify(shoppingCart))
  }, [ shoppingCart ]);

  return (
    <>
      <div className="heading">
        <h1 className="text-center mt-2 ">Here's Our latest Products</h1>
      </div>
      {loader? <Loader/> :
      <div className="container py-5">
        <div className="row">
          {input.map((ele, ind) => {
            console.log("map",ele.image)
            return (
              <div key={ind} className="col-md-3 mx-4 my-2">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img src={ele.image} alt=""/>
                    <h5 className="card-title">Title: {ele.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Price: {ele.price}
                    </h6>
                    <p className="card-text">Details: {ele.discription}</p>
                    <div className="d-flex">
                      <p className="card-link">Rating: {ele.rating}</p>
                      <p className="card-link">Pieces Left: {ele.pieces}</p>
                    </div>
                    <button className="btn btn-outline-warning" onClick={()=> handleCart(ele)}>
                      <i className="fa-solid fa-cart-shopping"></i>Add To Cart
                     </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
};

export default Menspro;
