import "animate.css";
import './App.css';
import Introduction from "./components/Introduction";
import Contact from "./components/Contact";
import About from "./components/About";
import Sidenav from "./components/Sidenav";
import Experience from "./components/Experience";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <About />
      <Sidenav />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
