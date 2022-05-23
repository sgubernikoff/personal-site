import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Homepage";
import Contact from "./Contact";
import Work from "./Work";
import NavBar from "./Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Homepage />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
