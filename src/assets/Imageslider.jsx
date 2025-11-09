import React from 'react'
import{ useState, useEffect } from "react";
import banner from "../assets/sliderimg/banner.jpg"
import banner2 from "../assets/sliderimg/banner2.jpg"
import banner3 from "../assets/sliderimg/movie.jpg"
import banner4 from "../assets/sliderimg/squad.webp"
import banner5 from "../assets/sliderimg/Wednesday.webp"

const images = [ banner,banner2,banner3,banner4,banner5 ];

function Imageslider() {

     const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)}, 3000); // 3000ms = 3 seconds
    return () => clearInterval(timer); 
  }, []);

  return (
    <div className=" w-full h-[700px] flex flex-col items-center ">
      <img src={images[index]} alt="slider" className="w-full h-[700px] object-cover shadow-xl transition-all duration-700 ease-in-out"/>
      <p className=" text-gray-600 text-sm">Image {index + 1} of {images.length}</p>
    </div>
  )
}

export default Imageslider




