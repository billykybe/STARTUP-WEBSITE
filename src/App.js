import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Service from "./components/Services/Service";
import News from "./components/News/News";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-bar-holder">
          <NavBar />
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/service" element={<Service />}></Route>
          <Route exact path="/news" element={<News />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
