import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Team from "./Components/Team";
import Booking from "./Components/Booking";
import Footer from "./Components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>~
          <Route path="/artists" element={<Artists />}></Route>
          <Route path="/teams" element={<Team />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
