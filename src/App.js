import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCard from "./components/Hero-card";
import BestDelivered from "./components/BestDelivered";
import RegularMenu from "./components/RegularMenu";
import Footer from "./components/Footer";
import Menu from "./components/Menu.js";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
// Pages
// const Menu = () => <div>Menu Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const About = () => <div>About Page</div>;

const BrowserRout = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <Header />
      <Hero />
      <HeroCard />
      <BestDelivered />
      <RegularMenu />
      <Footer />
    </>
),
},
{
  path:"/menu",
  element:(
    <>
    <Header />
    <Menu />
    <Footer />
    </>
  ),
},
{
path:"/Gallery",
element:(<>
<Header />
<Gallery/>
<Footer />
</>),

},{
  path:"/about",
  element:(<>
  <Header/>
  <About/>
  <Footer />
  </>),
}

])

const App = () => (
 < RouterProvider router={BrowserRout}/>

  // <Router>
  //   <Header />

  //   <Routes>
  //     <Route
  //       path="/"
  //       element={
  //         <>
  //           <Hero />
  //           <HeroCard />
  //           <BestDelivered />
  //           <RegularMenu />

  //         </>
  //       }
  //     />
  //     <Route path="/menu" element={<Menu />} />
  //     <Route path="/gallery" element={<Gallery />} />
  //     <Route path="/about" element={<About />} />
  //   </Routes>
  //   <Footer />
  // </Router>

);

export default App;
