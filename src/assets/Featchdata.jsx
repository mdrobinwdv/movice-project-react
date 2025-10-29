import { FaStarHalfAlt } from "react-icons/fa";
import { FaEye } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';


function Featchdata({data}) {
 const  {id , title, description,cover_picture, card_picture, released_date, platform, rating, audio, subtitle, video_quality, genres, movie_category, category } = data;

  return (
    <>
          <div className=" w-full h-[450px] rounded-md flex flex-col justify-center items-center gap-5 mt-5  ">
               <div className=" w-[250px] h-3/4  rounded-md">
                    <img className=" w-full h-full rounded-md  " src={card_picture} alt="" />
               </div>
               <div className=" w-full h-1/4 flex justify-between items-center ">
                    <div className=" w-4/5 h-full py-2 space-y-2 ">
                         <h1 className=" text-md font-bold text-white ">{title}</h1>
                         <p className=" text-blue-100/50 ">{released_date}</p>
                         <p className=" w-[70px] h-[30px] font-bold flex justify-center items-center rounded-md bg-amber-300 ">{platform}</p>
                    </div>
                    <div className=" w-1/5 h-full flex flex-col justify-end items-end space-y-8  ">
                         <p className=" flex justify-center items-center gap-3 "><FaEye size={18} color="#ffffff" /><FaHeart size={18} color="red" /></p>
                         <p className=" flex justify-center items-center gap-3 "><FaStarHalfAlt className=" text-yellow-400 "/><span className=" text-blue-200 ">{rating}</span></p>
                    </div>
               </div>
          </div>
    </>
  )
}

export default Featchdata;
