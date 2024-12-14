import { Link } from "react-router-dom";
import Card from "./MenuCard";
import {foodData} from "./utils/data";

const RegularMenu = () => {

      
    return (
        <div className="ml-6 mt-24">
            <div className="flex items-center gap-3 lg:justify-between flex-col lg:flex-row mb-10 " >
                <div className="left-heading">
                    <h2 className=" lg:ml-16 text-4xl font-bold tracking-wider mb-4">Our <span className="text-[#ea5858]">Regular</span> Menu</h2>
                    <p className="lg:ml-16 opacity-70 font-light tracking-wider w-full md:w-[55%]">These are our Regular Menus. You Can Order Anything you like. </p>
                </div>
                <div className="right-btn mt-8 lg:mr-16">
                    <Link to={"/menu"} className="bg-[#ea5858]  py-2 px-4 rounded-lg border-[#ea5858]"><span className="text-[#fff0e9]">See all</span></Link>
                </div>
            </div>
            <div className="w-[80%] mb-32  md:ml-16 lg:ml-28 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">

                {foodData.map((food,index) => 
                    <Card key={index} food={food} />
                )}
            </div>
        </div>
    )
}
export default RegularMenu;