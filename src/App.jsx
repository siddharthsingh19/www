import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import PNF404 from "./components/PNF404";
import Services from "./pages/services/Services";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/services" element={<Services />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/portfolio" element={<Portfolio />}></Route>
                    <Route path="*" element={<PNF404 />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
