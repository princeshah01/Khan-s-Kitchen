import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCard from "./components/Hero-card";
import BestDelivered from "./components/BestDelivered";
import RegularMenu from "./components/RegularMenu";
import Footer from "./components/Footer";
import Menu from "./components/Menu.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.js";
import Gallery from "./components/Gallery.js";
import Item from "./components/Item.js";
const About = () => <div>About Page</div>;
const Contact = () => <div>Contact Page</div>;

const AppToRender = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const BrowserRoute = createBrowserRouter([
  {
    path:"/",
    element:<AppToRender/>,
    children:[
      {
        path:"/",
        element :(
        <>
        <Hero/>
        <HeroCard/>
        <BestDelivered/>
        <RegularMenu/>
        </>
        ),

      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/Contact",
        element:<Contact/>
      },
      {
        path:"/gallery",
        element:<Gallery/>
      },
      {
        path:"/item/:itemId",
        element:<Item/>
      }
    ],
    errorElement:<ErrorPage/>,
  }
  
]);

const App =() =>{
  return (
   <RouterProvider  router={BrowserRoute}/>
   
  )
}

export default App ;
