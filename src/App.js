import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function App() {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "dark") {
      return setMode("light");
    }
    return setMode("dark");
  }

  return (
    <div className={mode === "dark" ? "App" : "light"}>
      <nav className="navbar">
        <Navbar />
        <button className="mode" onClick={() => toggleMode()}>
          {mode === "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </nav>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact mode={mode} />
    </div>
  );
}

export default App;
