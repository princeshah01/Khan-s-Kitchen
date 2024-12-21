import React from 'react';
import Logo from "../image/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiHeartOrgan } from "react-icons/gi";



function Footer() {
    return (
        <footer className='flex items-center flex-col my-4 '>
            <div className='footer-main flex justify-between  w-[80%] py-10 border-y-[3px] border-[#fdcc63] flex-col lg:flex-row'>
                <div className='flex flex-col gap-7'>
                    <div> {/* khan's kitchen logo and copyright */}
                        <div className='flex gap-2 items-center'>
                            <img className='w-14' src={Logo} alt="company's logo" />
                            <h2 className='mt-4 hero-text text-2xl font-bold text-[#ea5858]'>Khan's kitchen</h2>
                        </div>
                        <p className='hero-tex text-xs font-thin tracking-wider'>Continue Khan's kitchen 2023 All Right Reserved .</p>
                    </div>
                    <div>
                        <h2 className='hero-text text-2xl font-semibold text-[#ea5858] tracking-wider'>Follow us on</h2>
                        <div className='flex'>
                            <a href="https://www.facebook.com/khanskitchenrjb/" className='mr-2 hover:scale-105 text-[#4267B2]'><FaFacebookSquare size={24} className='opacity-80 hover:opacity-100 ' /></a>
                            <a href="https://www.instagram.com/explore/locations/102042645771395/khans-kitchen/nearby/" className='hover:scale-105 text-[#ee2a7b]'> <FaSquareInstagram size={24} className='opacity-80 hover:opacity-100' />
                            </a>

                        </div>

                    </div>
                </div>
                <div className='mt-6'>
                    <h2 className='hero-text text-3xl font-semibold tracking-wide text-[#ea5858] '>Links</h2>
                    <ul className='flex flex-col gap-2 '>
                        <Link to="/" className='hover:underline'>Home</Link>
                        <Link to="/menu" className='hover:underline'>Menu</Link>
                        <Link to="/Gallery" className='hover:underline'>Gallery</Link>
                        <Link to="/contact" className='hover:underline'>Contacts</Link>
                    </ul>
                </div>
                <div className='mt-6 flex gap-8 flex-col lg:flex-row' id='contact'>
                    <div className='flex flex-col gap-2'>

                    <h2 className='hero-text text-3xl font-bold text-[#ea5858]'>Contacts</h2>
                    <p><a href="tel:+977-9817789966">+977-9817789966</a></p>
                    <p> <a href="mailto:khanskitchenrjb1@gmail.com" className='normal-case'>khanskitchenrjb1@gmail.com</a></p>
                    <p> <a href="https://www.khanskitchen.com.np" target="_blank" className='normal-case'>www.khanskitchen.com.np</a></p>
                    </div>
                    <iframe
                        title='khanskitchen'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223.0851460764335!2d86.75314448031678!3d26.540625307163474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eefb310d6c0887%3A0xb215e43fbd492305!2sKhan&#39;s%20Kitchen!5e0!3m2!1sen!2sin!4v1734103084364!5m2!1sen!2sin"
                        width="200"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='rounded-lg '
                    />
                </div>
            </div>

            <div className='created-by flex items-center gap-1 mt-2 hero-text'>Designed & created by <a href="https://www.prince.info.np" rel="noopener noreferrer" target="_blank">prince </a> with <GiHeartOrgan size={20} className='text-[#ea5858]' />
            </div>
        </footer>
    );
}

export default Footer;
