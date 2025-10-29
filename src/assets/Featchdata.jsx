
function Featchdata({data}) {
 const  {id , title, description,cover_picture, card_picture, released_date, platform, rating, audio, subtitle, video_quality, genres, movie_category, category } = data;

  return (
    <>
          <div className=" w-full h-[450px] rounded-md flex flex-col justify-center items-center gap-5 ">
               <div className=" w-[250px] h-3/4 border-2 rounded-md">
                    <img src={card_picture} alt="" />
               </div>
               <div className=" w-full h-1/4 p-3 space-y-2 ">
                    <h1 className=" text-md font-bold text-white ">{title}</h1>
                    <p className=" text-blue-100/50 ">{released_date}</p>
                    <p className=" w-[70px] h-[30px] font-bold flex justify-center items-center rounded-md bg-amber-300 ">{platform}</p>
               </div>
          </div>
    </>
  )
}

export default Featchdata;
