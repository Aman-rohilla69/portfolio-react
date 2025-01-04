import "./App.css";
import About from "./Components/About3/About";
import Contact from "./Components/Contact6/Contact";
import Hero from "./Components/Hero2/Hero";
import MyWork from "./Components/My work5/MyWork";
import Navbar from "./Components/Navbar1/Navbar";
import Services from "./Components/Services4/Services";
import Footer from "./Footer/Footer";
function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
