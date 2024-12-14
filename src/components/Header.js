import React, { useState } from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Header = () => {
    const [click, setClick] = useState(false);

    const toggleMenu = () => setClick(!click);

    const renderMobileMenu = () => (
        <div className="lg:hidden z-50 block p-2 font-semibold absolute w-50 top-[5.8rem] right-4 bg-[#3c3835] rounded-lg">
            <ul className="text-center text-sm px-8">
                {["/", "/About", "/Menu", "/Gallary", "/Contact"].map((path, idx) => (
                    <Link key={idx} to={path}>
                        <li className="my-2 py-2 border-b border-[#fdcc63] text-[#fff0e9] hover:rounded">
                            {path.replace("/", "") || "Home"}
                        </li>
                    </Link>
                ))}
                <ul className="flex justify-between text-[#fff0e9] gap-2 font-bold mb-2">
                    <li className="px-3 py-1 border border-[#ea5858] rounded-lg bg-[#ea5858]">
                        <a href="#">Login</a>
                    </li>
                    <li className="px-3 py-1 border border-[#ea5858] rounded-lg bg-[#ea5858]">
                        <a href="#">Signup</a>
                    </li>
                </ul>
            </ul>
        </div>
    );

    return (
        <nav className="navigation-bar flex items-center justify-between p-4 ">
            <div className="flex items-center">
                <img src={logo} alt="company's logo" style={{ width: "70px" }} />
                <span className="font-extrabold hidden lg:block ml-2 logo mt-3">Khan's Kitchen</span>
            </div>

            <div className="hidden lg:flex gap-8 text-lg">
                {["Home", "Menu", "Gallery", "About", "Contact"].map((item, idx) => (
                    <Link
                        key={idx}
                        to={`/${item === "Home" ? "" : item}`}
                        className="hover:underline underline-offset-8 transition duration-300 ease-in-out decoration-[#ea5858]"
                    >
                        {item}
                    </Link>
                    
                ))}
            </div>

            <div className="hidden lg:flex gap-4 login-signup">
                <a href="#" className=" text-lg font-semibold text-[#ea5858]">
                    Login
                </a>
                <a href="#" className=" font-semibold text-lg text-[#ea5858] border border-[2px] px-2 border-[#ea5858] rounded-lg hover:bg-[#ea5858] hover:text-[#fff0e9]">
                    Signup
                </a>
            </div>

            <div className="lg:hidden">
                {click && renderMobileMenu()}
                <button
                    onClick={toggleMenu}
                    className="block transition ease-in-out duration-700"
                    aria-label="Toggle menu"
                >
                    {click ? (
                        <RxCross1 className="text-[#fff0e9] bg-[#3c3835] rounded-lg p-2 w-10 h-10" />
                    ) : (
                        <RxHamburgerMenu className="text-[#fff0e9] bg-[#3c3835] rounded-lg p-2 w-10 h-10" />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Header;
