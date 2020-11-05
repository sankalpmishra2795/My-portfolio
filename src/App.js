import React,{useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Projects from "./components/Projects";
import TechSection from "./components/TechSection";
import Tools from "./components/Tools";
import Statics from "./components/Statics";
import Github from "./components/Github";

function App() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor")
    document.addEventListener("mousemove", e => {
      cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
      // cursor.setAttribute("style", `background: rgb(${e.pageY},${e.pageX},${e.pageY})`)
      let r = Math.floor(Math.random() * 210);
      let g = Math.floor(Math.random() * 250);
      let b = Math.floor(Math.random() * 230);
      cursor.style.backgroundColor = `rgb(${r},${g},${b})`
    })
  }, [])

  return (
    <div>
      <div className="cursor"></div>
      <Header />
      <TechSection />
      <Section1 />
      <Tools />
      <Projects />
      <Statics />
      <Github />
    </div>
  );
}

export default App;
