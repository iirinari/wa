import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
        <footer>
          Open-source code by Iryna Rishko and is{" "}
          <a
            href="https://github.com/iirinari/wa"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github
         </footer>
      </div>
    </div>
  );
}


