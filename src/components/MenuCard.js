import React from "react";
import {Link} from "react-router-dom" ;
import StarRating from "./Rating.js";
const FoodCard = (props) => {
  const {food} = props ;
  const {name , image , price , avgRating , reviewCount}  = food ;
  return (
    <div className="hover:scale-105 transition transform ease-in-out duration-300 w-[15rem] h-[19rem]  shadow-2xl bg-white flex  relative rounded-[2rem]">
      <div className="w-44 h-44 rounded-full overflow-hidden  border-8 border-red-400 absolute -top-10 -right-10">
        <img className="w-full object-center" src={image} alt="" />
      </div>
      <div className="absolute top-32 left-4 w-[12rem] flex flex-col  mt-4 px-2 "   >
          <h2 className="font-bold text-2xl text-nowrap ">{name}</h2>
          <div className="rating mb-6 flex items-center gap-2">
            <StarRating rating = {avgRating}/> <span className="text-sm opacity-80"> ({reviewCount})</span>
          </div>
          <div className="flex justify-between ">
            <div className="price font-bold text-xl ml-2 text-nowrap"><span className="text-lg">Rs</span> {price}</div>
            <Link className="bg-[#ea5858] items-center text-nowrap flex py-2 px-4 rounded-3xl">Buy Now</Link>
          </div>
      </div>
    </div>
  )
};

export default FoodCard;
