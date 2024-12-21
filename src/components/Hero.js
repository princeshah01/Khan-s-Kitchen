import React from "react";
import HeroImg from "../image/Hero-image.png"
import { Typed } from "react-typed";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";


const TypingAnimation = () => {
    const el = useRef(null); 
    const typed = useRef(null);

    useEffect(() => {
        typed.current = new Typed(el.current, {
            strings: ["Welcome to Khan's Kitchen!", "Famous for its Biryani", "Order now!"], // Strings to type
            typeSpeed: 100,
            backSpeed: 90,
            loop: true,
        });

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div >
            <span ref={el}></span>
        </div>
    );
};

const Arrow = () => (
    <div className="graph__wrapper">
        <svg
            width="160px"
            height="109px"
            viewBox="0 0 315 107"
            version="1.1"
            style={{ overflow: "visible" }}
        >
            <g id="Page-1" fill="none" strokeWidth="1" fillRule="evenodd">
                <path
                    id="Path-1"
                    className="path"
                    stroke="#ea5858"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                />

                <path
                    className="dashed"
                    stroke="#fdcc63"
                    strokeWidth="10"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    d="M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"
                />

                <polyline
                    id="arrow"
                    points="0,-18 36,0 0,18 10,0"
                    fill="#db5862"
                >
                    <animateMotion
                        rotate="auto"
                        begin="1s"
                        dur="1.6s"
                        repeatCount="1"
                        fill="freeze"
                    >
                        <mpath xlinkHref="#Path-1" />
                    </animateMotion>
                </polyline>
            </g>
        </svg>
    </div>
);

const Hero = () => {
    return (
        <div className="Hero-section lg:gap-32  justify-between flex mt-8 flex-col lg:flex-row">

            <div className="left-hero w-[100%] lg:w-1/3">
                <h1 className="hero-text text-[#ea5858] mt-4  font-bold text-5xl block md:hidden " > Welcome to khan's kitchen !</h1>

                <h1 className="hero-text text-[#ea5858] mt-4 mb-8  font-bold text-5xl lg:text-nowrap hidden md:block " >< TypingAnimation /></h1>
                <h3 className="text-zinc-950 font-bold text-3xl lg:text-nowrap mt-2 mb-4">"Home of Authentic <span className="text-[#ea5858]  border-b-4 border-[#fdcc63]">Biryani Bliss</span>"</h3>
                <p className="hero-para-text text-[#3c3835] font-semibold text-xl  lg:w-[130%]">Indulge in the rich, aromatic flavors of our signature biryani, crafted to perfection with the finest spices and ingredients. At Khan's Kitchen, every bite is a journey to culinary excellence.</p>
                <p className="text-[#fdcc63] font-bold text-2xl">Taste the Tradition.<br /> <span className="text-[#ea5858]">Experience the Flavor.</span> </p>
                <div className="btns flex gap-2 md:gap-8 mt-6 flex-col md:flex-row ">
                    <Link to="/Menu" className="text-xl gap-2 text-nowrap hover:scale-105 transition transform ease-in-out flex justify-center items-center text-[#ea5858]  hover:text-white border border-[#ea5858]  hover:bg-[#ea5858]  focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#ea5858]  dark:text-[#ea5858]  dark:hover:text-white dark:hover:bg-[#ea5858]  dark:focus:ring-[#ea5858] " > 
                            <span className="font-bold">Buy Now</span>
                            <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                            <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                            </svg>
                    </Link>
                    <Link to="/Menu" className="text-nowrap hover:scale-105 transition transform ease-in-out flex justify-center items-center  text-white border border-[#ea5858]  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-[#ea5858]  dark:text-[#fff]  dark:hover:text-white dark:bg-[#ea5858]  dark:focus:ring-[#ea5858]">
                        <span className="font-bold text-[18px]"> Explore Our Biryani</span>  
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg> 
                    </Link>

                </div>
            </div>
            <div className="middle  -rotate-6 mt-6 hidden lg:block">
                <Arrow />
            </div>
            <div className="right-hero w-[120%] lg:w-1/3 mt-12 md:mt-8  ">
                <img className="w-[80%] hover:scale-105 transition ease-in-out duration-300 hover:-rotate-3 lg:mt-16 md:ml-10" src={HeroImg} alt="" />
            </div>


        </div>
    );
}

export default Hero;