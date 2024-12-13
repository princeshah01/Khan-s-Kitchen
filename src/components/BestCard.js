import {Link} from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const ArrowIcon = ({color})=><IoIosArrowForward style={{color}}/> ;
const BestCard = ({img , name}) => {
    return(
       <div className="flex flex-col justify-center items-center">
        <img loading="lazy" className="hover:scale-105 hover:rotate-3 transition transform ease-in-out duration-300 mb-2 w-3/4" src={img} alt="some-image" />
        <h2 className="font-bold text-xl tracking-wider text-nowrap text-center ">{name}</h2>
        <Link smooth={true} to="/" className="flex gap-2 text-center items-center text-[#ea5858]"><span className="font-mono">Order now</span> <ArrowIcon color="#ea5858"/>  </Link>
       </div>
    );
};

export default BestCard ;