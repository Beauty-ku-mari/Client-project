import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const images = [
    "https://github.com/Beauty-ku-mari/Client-project/blob/main/public/assets/image5.jpg",
    "https://github.com/Beauty-ku-mari/Client-project/blob/main/public/assets/image8.jpg",
    "https://github.com/Beauty-ku-mari/Client-project/blob/main/public/assets/image11.jpg",
    "/https://github.com/Beauty-ku-mari/Client-project/blob/main/public/assets/image2.jpg",
 "https://github.com/Beauty-ku-mari/Client-project/blob/main/public/assets/image1.jpg",

    
  ];

  return (
    <div className="bg-[#1a1a1a] text-white w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-16">
      
      {/* Left: Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left px-6 mb-10 md:mb-0"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Richa Singh</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-4">
          Panchayat Secretary | Grassroots Administrator | Rural Development Enthusiast
        </p>
        <p className="text-gray-300 text-xl leading-relaxed">
          A dedicated government official working at the grassroots level to bridge the gap between public policies and rural communities.
           With deep knowledge of rural governance and development schemes, Richa ensures transparency, efficient implementation of government programs, and active participation of villagers in decision-making processes. 
        </p>
      </motion.div>

      {/* Right: Slider */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 max-w-[600px]"
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Girl ${index + 1}`}
                className="w-full h-[500px] object-cover object-center rounded-xl mx-auto"
              />
            </div>
          ))}
        </Slider>
      </motion.div>

    </div>
  );
};

export default Banner;

