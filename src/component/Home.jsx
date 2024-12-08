import React, { useState } from "react";
import image from "../images/shope.png";
import ProductCard from "./ProductCard/ProductCard";
import ProductFilter from "./ProductFilter/ProductFilter";
import BannerCarousel from "./HomePageBanner/BannerCarousel";
import { Button, Container, Offcanvas } from 'react-bootstrap';  
import { useDispatch } from "react-redux";
import { clearFilter } from "../app/cartSlice";

const Home = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false);  
  const closeSidebar = () => setShow(false);  
  const showSidebar = () => setShow(true);  
  return (
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
        <div className="container py-5">
          <div className="home ">
            <div className=" text-center">
              <BannerCarousel />
            </div>
          </div>

          <div className="container py-5">
            <div className="row pt-4">
              <div className="col-md-3 my-1 hide-on-small">
                <div className="d-flex justify-content-between align-items-center">
                  <h2> Filter</h2>
                  <div style={{ cursor: 'pointer' }} onClick={() => dispatch(clearFilter())} > Clear Filter</div>
                </div>
                <ProductFilter />
              </div>
              <div className="col-md-9 my-1">
                <h2> Top Rated Products</h2>
                <ProductCard />
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
              <div>
                <button
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                  className="sticky-filter-button"
                  onClick={showSidebar}
                >
                  Filter
                </button>
                <Container className='p-4'>  
                <Offcanvas show={show} onHide={closeSidebar}>  
                  <Offcanvas.Header closeButton>  
                    <Offcanvas.Title>Apply Filter</Offcanvas.Title>  
                  </Offcanvas.Header>  
                  <Offcanvas.Body>  
                    <ProductFilter/>  
                  </Offcanvas.Body>  
                </Offcanvas>  
                </Container>  
                </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
