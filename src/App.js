import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroCard from "./components/Hero-card";
import BestDelivered from "./components/BestDelivered";
import RegularMenu from "./components/RegularMenu";
// Pages
const Menu = () => <div>Menu Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const About = () => <div>About Page</div>;

const App = () => (
  <Router>
    <Header />

    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <HeroCard />
            <BestDelivered />
            <RegularMenu/>
          </>
        }
      />
      <Route path="/menu" element={<Menu />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
