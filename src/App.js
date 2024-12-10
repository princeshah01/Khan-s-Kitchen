import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';

const Home = () => <div>Home Page</div>;
const Menu = () => <div>Menu Page</div>;
const Gallary = () => <div>Gallary Page</div>;
const About = () => <div>About Page</div>;

const App = () => (
<Router>
<Header/>
<Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/gallary" element={<Gallary />}/>
    <Route path="/about" element={<About />}/>

</Routes>

</Router>
) ;
export default App ;