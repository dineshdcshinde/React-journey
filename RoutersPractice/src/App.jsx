import {Routes, Route} from "react-router-dom"
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="wrapper min-h-screen w-full bg-[#3c3c3c] text-white">
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />  {/* When the URL is /services */}
          <Route path="/services/:category" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
