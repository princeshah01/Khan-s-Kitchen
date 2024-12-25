import React from "react";
import aboutMain from "../../image/about-main.png";
import { Link } from "react-router-dom";
import mainChef from "../../image/main-chef.png";
import Testimonial from "./testimonial.js";
import { reviewData } from "../utils/reviewData";


const About = () => {
  return (
    <div className="mb-10" >

      <div className="flex flex-col lg:flex-row justify-between p-2 md:p-8  ">
        <div className="w-full lg:w-1/3 flex items-center">
          <img src={aboutMain}  alt="Biryani-image" className="hover:rotate-2 hover:scale-105" />

        </div>
        <div className="flex flex-col items-end gap-8 w-full px-2 lg:w-1/2" >
          <h1 className="border-x-4 border-[#ea5858] bg-red-100 rounded-full px-4 py-2 mt-8 lg:mt-0 text-xl  ">we are the best</h1>
          <h2 className="mb-10 font-bold tracking-wider text-5xl   text-right"> We crafted <span className="font-normal">delectable</span>  and <span className="font-normal">flavorful food </span> using organic <span className="font-normal">ingredents</span></h2>
          <div className="mr-2 z-50 hover:scale-105 transform transition ease-in-out">

            <Link to="/Menu" className=" bg-[#ea5858]  py-3 px-6 rounded-full text-xl font-bold border-[#ea5858] text-[#fff0e9]">Order Now</Link>
          </div>

        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between p-8 ">
        <div className="w-full lg:w-1/2 mt-4 lg:mt-16">
          <h3 className="font-semibold text-2xl">At Khan's Kitchen,</h3>
          <p className="opacity-80 text-lg">
            we bring authentic flavors to life with every dish. From the aromatic spices of our signature biryani to the rich, slow-cooked curries, every meal is crafted with passion and precision. Fresh ingredients, traditional recipes, and love for cooking make every bite unforgettable. Taste the tradition!
          </p>
        </div>
        <div className="w-full lg:w-1/3 lg:-mt-10 xl:-mt-40 xl:mr-16">
          <img className="filter opacity-90 hover:scale-100 z-0" src={mainChef} alt="" />
        </div>

      </div>

    <h3 className="text-center mb-10 text-5xl font-semibold">Our happy Customers Say about us !!</h3>

    <div className="flex mt-10 flex-wrap gap-8 justify-center">
  
      {reviewData.map((d,idx)=>{
        return(
          <Testimonial key={idx} data={d} />
        )
      } )} 
    </div>

    </div>
  );
};

export default About;
