import React from "react";
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    };

    const renderContent = () => (
        <div className="lg:hidden z-50 block p-2 font-semibold absolute w-50 top-[5.1rem]  right-4 bg-[#3c3835] rounded-lg">
            <ul className="text-center text-sm px-8">
                <Link spy={true} smooth={true} to="/">
                    <li className="text-center my-2 py-2 border-b border-[#fdcc63]  text-[#fff0e9] hover:rounded">
                        Home
                    </li>
                </Link>
                <Link spy={true} smooth={true} to="/About">
                    <li className="my-2 py-2 border-b border-[#fdcc63]  text-[#fff0e9]   hover:rounded">
                        About
                    </li>
                </Link>
                <Link spy={true} smooth={true} to="/Menu">
                    <li className="my-2 py-2 border-b  border-[#fdcc63]  text-[#fff0e9]  hover:rounded">
                        Menu
                    </li>
                </Link>
                <Link spy={true} smooth={true} to="/Gallary">
                    <li className="my-2 py-2 border-b border-[#fdcc63]  text-[#fff0e9]  hover:rounded">
                        Gallary
                    </li>
                </Link>
      
                <Link spy={true} smooth={true} to="/Contact">
                    <li className="my-2 py-2 px-8 border-b border-[#fdcc63]  text-[#fff0e9]  hover:rounded">
                        Contact
                    </li>
                </Link>
            <ul className="flex justify-between text-[#fff0e9] gap-2 font-bold mb-2 ">

                <li className="px-3 py-1 border border-[#ea5858] rounded-lg bg-[#ea5858]" id=""><a href="#">Login</a></li>
                <li className="px-3 py-1 border border-[#ea5858] rounded-lg bg-[#ea5858]" id=""><a href="#">Signup</a></li>
            </ul>
            </ul>
        </div>
    );

    return (

        <nav className="navigation-bar">
            <div className="logo">
                <img style={{ width: "70px" }} src={logo} alt="company's logo" />
                <span className="font-extrabold hidden sl:block" id="logo-text">Khan's Kitchen</span>
            </div>
            <div className="hidden lg:block  links-nav">
                <ul>
                    <li  className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] "><Link to="/">Home</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] "><Link to="/Menu">Menu</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/Gallary" >Gallary</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/About" >About</Link></li>
                    <li  className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/Contact" >Contact</Link></li>


                </ul>
            </div>
            <div className="hidden lg:block login-signup">
                <ul>

                    <li id="login-btn"><a href="#">Login</a></li>
                    <li id="signup-btn"><a href="#">Signup</a></li>
                </ul>
            </div>

            <div className="lg:hidden">
                {click && renderContent()}
            </div>

            <button
                className="block lg:hidden transition ease-in-out duration-700 mb-3 -mr-4"
                onClick={handleClick}
            >
                {click ? (
                    <RxCross1 className="mt-6"
                        style={{

                            width: "40px",
                            height: "40px",
                            backgroundColor: "#3c3835",
                            borderRadius: "5px",
                            color: "#fff0e9",
                            padding: "5px",
                        }}
                    />
                ) : (
                    <RxHamburgerMenu
                        className="mt-6"
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#3c3835",
                            borderRadius: "5px",
                            color: "#fff0e9",
                            padding: "5px",
                        }}
                    />
                )}
            </button>
        </nav>

    )
};

export default Header;