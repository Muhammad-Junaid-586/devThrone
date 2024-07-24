import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import Portfolio from "./containers/portfolio/Portfolio";
import Contact from "./containers/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="h-[100%] bg-primary">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
