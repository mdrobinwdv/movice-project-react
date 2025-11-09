import React from "react";

function Recomanded({ categoris, selectcategory, setselectcategory }) {
  return (
    <>
      <div className=" flex justify-center items-center gap-6 ">
        {categoris.map((cat) => (
          <button
          onClick={ () => setselectcategory(cat)}
           key={cat} className={`w-[100px] h-[45px] border cursor-pointer rounded-full 
            ${
              selectcategory === cat ? "bg-yellow-500 text-black border-yellow-300"
                : "border-yellow-500 text-gray-300 hover:bg-yellow-500 hover:text-black"
            }`}
          >{cat}
          </button>
        ))}
      </div>
    </>
  );
}

export default Recomanded;
