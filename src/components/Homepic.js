import React from "react";
import cvr from "../images/Image 0.9763627652609776.png"
import Slider from "react-slick";


function Homepic()
{
    /* const FoodCarousel = () => {
        const images = [
          "D:\E-drive\fcm\src\images\Rectangle 8.png",
          "D:\E-drive\fcm\public\non-veg\butter chicken.jpg",
          "D:\E-drive\fcm\public\non-veg\butter chicken.jpg"
        ];
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          };
    } */
    return(
        <img className="cvr" src={cvr}/>
   /* 
        <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index}>
          <img src={src} alt={`Slide ${index}`} style={{ width: '100%', height: '400px' }} />
        </div>
      ))}
    </Slider> */
    )
}
export default Homepic;