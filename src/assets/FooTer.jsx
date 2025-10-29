import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <>
      <div className=" w-full h-[300px] grid grid-cols-5 bg-black/90 ">
          <div className=" w-full h-[300px] p-12 space-y-3">
               <h1 className=" text-3xl font-bold text-yellow-400 ">𝓓𝓻𝓪𝓶𝓪𝓽𝓲𝓬</h1>
               <p className=" text-white ">enjoy your movie time</p>
          </div>
          <div className=" w-full h-[300px] p-15 flex flex-col text-white font-bold " >
               <a className=' mb-5 ' href="#">NAVIGATION</a>
               <a href="#">HOME</a>
               <a href="#">TV SHOW</a>
               <a href="#">MOVIES</a>
               <a href="#">NEW</a>
          </div>
          <div className=" w-full h-[300px] p-15 text-white space-y-3 ">
               <h1 className=" uppercase mb-5 ">legal</h1>
               <p>Privacy Policy</p>
               <p>Terms of Service</p>
               <p>Cookie Preferences</p>
               <p>Corporate Information</p>
          </div>
          <div className=" w-full h-[300px] p-15 text-white space-y-3  ">
               <h1 className=" uppercase mb-5 ">talk to us</h1>
               <p>support@ercom .com</p>
               <p>+66 2399 1145</p>
          </div>
          <div className=" w-full h-[300px] p-15 text-white ">
               <h1 className=" mb-5 uppercase ">follow us</h1>
               <div className=" flex gap-5 text-3xl ">
                    <FaTwitter />
                    <FaYoutube />
                    <FaFacebook />
               </div>
          </div>
      </div>
    </>
  )
}

export default Footer
