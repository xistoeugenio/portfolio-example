import Topbar from "./components/menubar/topbar/Topbar";
import Intro from "./components/section-intro/Intro";
import Portfolio from "./components/section-portfolio/portfolio/Portfolio";
import Works from './components/section-works/works/Works';
import Testimonials from './components/section-testimonials/testimonials/Testimonials'
import Contact from './components/section-contact/contact/Contact';
import Menu from "./components/menubar/menu/Menu";
import './app.scss'
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen =  {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen =  {menuOpen} setMenuOpen = {setMenuOpen}/>
      <div className="sections" onClick={()=> setMenuOpen(false)}>
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
