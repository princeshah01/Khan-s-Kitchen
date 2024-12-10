import React from "react";
import logo from "../image/logo.png"
import { Link } from "react-router-dom";


const Header = () => {

    return (

        <nav className="navigation-bar">
            <div className="logo">
                <img style={{ width: "70px" }} src={logo} alt="company's logo" />
                <span className="font-extrabold" id="logo-text">Khan's Kitchen</span>
            </div>
            <div className="links-nav">
                <ul>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] "><Link to="/">Home</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] "><Link to="/Menu">Menu</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/Gallary" >Gallary</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/About" >About us</Link></li>
                    <li className=" hover:underline underline-offset-8  transition duration-900 ease-in-out decoration-[#ea5858] " ><Link to="/Contact" >Contact us</Link></li>


                </ul>
            </div>
            <div className="login-signup">
                <ul>

                    <li id="login-btn"><a href="">Login</a></li>
                    <li id="signup-btn"><a href="">Signup</a></li>
                </ul>
            </div>
        </nav>

    )
};

export default Header;