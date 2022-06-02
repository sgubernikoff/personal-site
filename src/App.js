import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Work from "./Work";
import NavBar from "./Navbar";
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Homepage />
        <Work />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
