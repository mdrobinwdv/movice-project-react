import React from 'react'

import texTpic from "../assets/banner1/dramatic-lo.png"
import Picture from "../assets/banner1/vactor.jpg"

function Navbar() {
  return (
    <>
      <div className=" w-full h-[100px] border-2 flex justify-center items-center bg-black  ">
          <div className=" w-1/2 h-full flex justify-start items-center px-10 ">
               <img className=" w-[190px] h-[90px] " src= {texTpic} alt="" />
               <div className=" text-white text-[22px] space-x-10 px-10 ">
                    <a href="#">HOME</a>
                    <a href="#">TV SHOW</a>
                    <a href="#">MOVIES</a>
                    <a href="#">NEW</a>
               </div>
          </div>
          <div className= " w-1/2 h-full border-2 flex justify-end items-center gap-10 px-20 ">
               <input className=" w-[250px] h-[35px] bg-blue-100/30 text-white text-2xl rounded-full px-4" type="search" placeholder="Search...."  />
               <img className= " w-[85px] h-[85px] border2 rounded-full " src={Picture} alt="" />
          </div>
      </div>
    </>
  )
}

export default Navbar
