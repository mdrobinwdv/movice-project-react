import React from 'react'

function Recomanded() {
  return (
    <>
      <div className=" w-full h-[100px] bg-black  flex flex-col justify-center items-start px-10 gap-3">
          <h1 className=" text-2xl font-bold text-white ">recommended for you</h1>
          <div className= " w-full h-[50px] flex justify-start items-center gap-5 ">
               <button className= " w-[50px] h-[35px] bg-yellow-500 text-black font-bold rounded-full cursor-pointer ">All</button>
               <button className= " w-[130px] h-[35px] text-white font-bold rounded-full border-2 border-amber-200 cursor-pointer ">Bollywood</button>
               <button className= " w-[130px] h-[35px] text-white font-bold rounded-full border-2 border-amber-200 cursor-pointer " >Tollywood</button>
               <button className= " w-[130px] h-[35px] text-white font-bold rounded-full border-2 border-amber-200 cursor-pointer ">Mollywood</button>
               <button className= " w-[130px] h-[35px] text-white font-bold rounded-full border-2 border-amber-200 cursor-pointer ">Hollywood</button>
          </div>
      </div>
    </>
  )
}

export default Recomanded
