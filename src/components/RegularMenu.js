import { Link } from "react-router-dom";
import FoodCard from "./MenuCard";


const RegularMenu = () => {

    const  foodData  = [
        {
          name: "Egg Roll",
          image: "https://img.freepik.com/free-photo/egg-roll-fried-spring-rolls-white-plate-thai-food_1150-21492.jpg?t=st=1734081446~exp=1734085046~hmac=0f0e1b8f1100f131600b84aca33fa14fd44e2fc575e197eebf69da1cf702e0d3&w=900",
          price: 95,
          avgRating: 4,
          reviewCount: 258,
        },
        {
          name: "Chicken Lollipop",
          image: "https://img.freepik.com/free-photo/high-angle-shot-delicious-hot-spicy-dish-called-drums-heaven-table_181624-50861.jpg?t=st=1734081404~exp=1734085004~hmac=f59df1ecdfb5b6872e07cfa99e1b4671df83e9229b82e7af756dde7b1137bb77&w=900",
          price: 285,
          avgRating: 5,
          reviewCount: 119,
        },
        {
          name: "Chicken 65",
          image: "https://img.freepik.com/free-photo/side-view-stewed-meatballs-with-tomato-sauce-bell-pepper-spring-onion-mint-plate_141793-5117.jpg?t=st=1734081346~exp=1734084946~hmac=b9ba4d6fc08eb05469df54044d727099ab0792d749c92f8dc0c25e36c4642569&w=900",
          price: 225,
          avgRating: 4,
          reviewCount: 112,
        },
        {
          name: "Paneer Chilly",
          image: "https://img.freepik.com/premium-photo/paneer-jalfrezi-cottage-cheese-cooked-with-peppers-onion_466689-82020.jpg?w=900",
          price: 265,
          avgRating: 4,
          reviewCount: 123,
        },
        {
          name: "Paneer Pakoda",
          image: "https://img.freepik.com/premium-photo/crispy-paneer-popcorn-is-popular-party-snack-appetiser-selective-focus_466689-38830.jpg?w=360",
          price: 245,
          avgRating: 4,
          reviewCount: 139,
        },
        {
          name: "Veg Pakoda",
          image: "https://img.freepik.com/free-photo/delicious-veggie-dishes-still-life_23-2151160841.jpg?t=st=1734081189~exp=1734084789~hmac=1db9d898ddb08a0247bf210d86716782ce536d8a04f50c793144a2568f6fcf9f&w=900",
          price: 125,
          avgRating: 4,
          reviewCount: 150,
        },
      ];
      
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
            <div className="w-[80%]  md:ml-16 lg:ml-28 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20">

                {foodData.map((food) => 
                    <FoodCard food={food} />
                )};
            </div>
        </div>
    )
}
export default RegularMenu;