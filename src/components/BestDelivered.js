import React from "react";
import BestCard from "./BestCard";
import food1 from "../image/DumBiryani.png";
import food2 from "../image/chicken-fried.png";
import food3 from "../image/chicken-kebab.png" ;
const BestDelivered = () =>{
    return (
        <div className="best-d mt-24 mb-6 ml-6">
            <div className="headings flex justify-between gap-6 flex-col md:flex-row md:gap-0">
                <div className="left-heading lg:w-[30%]">
                    <h2 className="md:ml-12 lg:ml-16 text-4xl font-bold tracking-wider">Best <span className="text-[#ea5858]">Delivered </span>
                    Categories </h2>
                </div>
                <div className="right-heading lg:w-[25%]">
                    <p className="hidden lg:block lg:mr-16 opacity-70 font-light tracking-wider">Here Are Some of Our Best Distributed Categories. if you want you can order from here .</p>
                </div>
            </div>
            <div className="cards w-full gap-6 lg:gap-10 flex flex-col lg:flex-row mt-10">
                <BestCard img={food1} name={"chicken dum biryani"}/>
                <BestCard img={food2} name={"Crispy Fried Chicken"}/>
                <BestCard img={food3} name={"chicken kabab"}/>


            </div>

        </div>
    );
};

export default BestDelivered ;
