import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="nav-bar-holder">
        <NavBar />
      </div>
      <Home />
    </div>
  );
}

export default App;
