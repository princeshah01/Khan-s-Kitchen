import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { foodDataMain } from './utils/data';
import SimmerItem from "./ItemSimmer.js";
import Rating from "./Rating.js";
import BottomCard from "./BottomCard.js";
import {Link} from "react-router-dom" ;

const Item = () => {
  const { itemId } = useParams();
  const [dataFood, setDataFood] = useState(null);
  const [downData, setDownData] = useState([]);

  const fetchData = async () => {
    const data = await foodDataMain();

    const selectedItem = data[itemId - 1];
    setDataFood(selectedItem);

    if (selectedItem) {
      const firstWord = selectedItem.name.split(" ")[0]?.toLowerCase();
      const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(firstWord)
      );
      setDownData(filteredData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [itemId]);

  if (!dataFood) return <SimmerItem className="w-[100vw]" />;

  return (
    <div className="item w-[100%] flex justify-center items-center">
      <div className="w-full lg:w-[80%] bg-white rounded-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img className="w-full p-3 rounded-3xl" src={dataFood.image} alt="Food" />
          </div>

          <div className="w-[100%] lg:w-1/2 p-8 flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-wider">{dataFood.name}</h1>
            <p className="text-sm text-[#ea5858] font-semibold">Special price</p>
            <div className="flex gap-2 items-center">
              <p className="text-2xl">₹{(dataFood.price / 100) * 80}</p>
              <span className="text-lg line-through opacity-60">{dataFood.price}</span>
              <span className="text-xl text-[#ea5858]">20% off</span>
            </div>
            <Rating rating={dataFood.avgRating} />
            <p className="tracking-wide">
              [ {dataFood.reviewCount} ratings and reviews ]
            </p>
            <p className="text-xl font-medium">
              Preparation Time: {dataFood.orderTime}
            </p>
            <button className="hover:scale-105 transform transition-transform bg-[#ea5858] mt-10 items-center justify-center py-1 text-nowrap flex rounded-3xl w-28 md:w-[25%]">
              Order now
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center  gap-2 mt-8 border-y-2 py-8">
          <h3 className="ml-4 text-xl font-bold">Reviews</h3>
          {dataFood.reviews.map((review, idx) => (
            <p
              className="opacity-60 tracking-widest ml-4 hover:underline underline-offset-1"
              key={idx}
            >
              {review}
            </p>
          ))}
        </div>
          <h3 className='text-left pl-3 text-xl py-4 text-red-500'>Similar Products</h3>
      { (downData.length > 1)?  ( <div className="flex  overflow-x-auto">
          {downData.map((f) => { return ( (f.id != itemId)) ? <Link to={"/item/"+f?.id} key={f?.id}><BottomCard  food={f} /></Link> : "" }
          )} 
        
        </div>
          )  : <p className='ml-3 text-xl capitalize mb-4 '>nothing to show...😔 </p> }

        
          
      </div>
    </div>
  );
};

export default Item;
