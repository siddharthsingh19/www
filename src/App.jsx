import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./pages/portfolio/Portfolio";
import PNF404 from "./components/PNF404";
import Footer from "./components/footer/Footer";
function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Portfolio />}></Route>
                    <Route path="*" element={<PNF404 />}></Route>
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
