import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();  // this hook is use to get current path 

  useEffect(() => {
    console.log(pathname);
    // if(pathname === "/"){
    //     document.body.style.overflowX = "hidden";
    //     document.documentElement.style.overflowX = "hidden";
    // }
    // else{
    //     document.body.style.overflowX = "auto";
    //     document.documentElement.style.overflowX = "auto";
    // }
    window.scrollTo(0, 0); 
  }, [pathname]); 

  return null;
};

export default ScrollToTop;
