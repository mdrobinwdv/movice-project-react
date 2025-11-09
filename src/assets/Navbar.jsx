import React from "react";

import Picture from "../assets/banner1/vactor.jpg";

function Navbar() {
  return (
    <>
      <div className=" fixed top-0 left-0  w-full h-[100px] flex justify-center items-center bg-black/50 backdrop-blur-md z-100 ">
          <div className=" w-1/2 h-full flex justify-start items-center px-10 ">
               <h1 className=" text-5xl font-bold text-yellow-400 ">𝓓𝓻𝓪𝓶𝓪𝓽𝓲𝓬</h1>
               <div className=" text-white text-[22px] space-x-10 px-10 ">
                    <a href="#">HOME</a>
                    <a href="#">TV SHOW</a>
                    <a href="#">MOVIES</a>
                    <a href="#">NEW</a>
               </div>
          </div>
          <div className= " w-1/2 h-full flex justify-end items-center gap-10 px-20 ">
               <input className=" w-[250px] h-[41px] bg-black text-white text-2xl rounded-full px-4" type="search" placeholder="Search...."  />
               <img className= " w-[85px] h-[85px] border2 rounded-full " src={Picture} alt="" />
          </div>
      </div>
    </>
  );
}

export default Navbar;
