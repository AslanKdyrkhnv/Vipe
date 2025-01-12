import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Game from "./page/Game";
import Blog from "./page/Blog";
import TermsAndCookies from "./components/TermsAndCookies";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/play-game" element={<Game />} />
      </Routes>
      <TermsAndCookies />
      <Blog />
      <Footer />
    </Router>
  );
};

export default App;
