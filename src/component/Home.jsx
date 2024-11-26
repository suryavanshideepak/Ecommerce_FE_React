import React from "react";
import image from "../images/shope.png";
import ProductCard from "./ProductCard/ProductCard";
import ProductFilter from "./ProductFilter/ProductFilter";
import BannerCarousel from "./HomePageBanner/BannerCarousel";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className=" text-center pt-2">
          <BannerCarousel/>
        </h1>
      </div>

      <div className="container py-5">
        <div className="row pt-4">
          <div className="col-md-3">
            <ProductFilter/>
          </div>
          <div className="col-md-9">
            <ProductCard/>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Welcome To our Wide Range of clothes Store</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quia quis nam, consequuntur veritatis minus aperiam reiciendis
              impedit ipsam nemo, cumque libero doloremque? Suscipit, fuga?
            </p>
            <button className="btn btn-primary">Info</button>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src={image} alt="" />
        </div>
          <div className="col-md-6"> 
            <h1>Welcome To our Wide Range of clothes Store</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quia quis nam, consequuntur veritatis minus aperiam reiciendis
              impedit ipsam nemo, cumque libero doloremque? Suscipit, fuga?
            </p>
            <button className="btn btn-primary">Info</button>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
