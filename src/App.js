import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Hero from "./components/Hero.js";
import HeroCard from "./components/Hero-card.js"

const Menu = () => <div>Menu Page</div>;
const Gallary = () => <div>Gallary Page</div>;
const About = () => <div>About Page</div>;

const App = () => (
<Router>
<Header/>

<Routes>
    <Route path="/" element={<Hero />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/gallary" element={<Gallary />}/>
    <Route path="/about" element={<About />}/>

</Routes>
<HeroCard/>

</Router>
) ;
export default App ;