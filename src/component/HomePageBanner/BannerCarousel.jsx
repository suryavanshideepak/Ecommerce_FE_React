import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500, 
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const images = [
    "https://img.freepik.com/premium-vector/special-offer-poster-shopping-banner-with-blank-product-podium-scene_297886-602.jpg",
    "https://www.shutterstock.com/image-vector/colorful-discount-sale-podium-special-260nw-2055955985.jpg",
    "https://static.vecteezy.com/system/resources/previews/011/320/988/non_2x/big-sale-banner-design-with-podium-gradient-background-social-media-post-product-advertisement-design-special-discount-design-vector.jpg",
  ];

  return (
    <div style={{ width: "80%", margin: "auto", }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
