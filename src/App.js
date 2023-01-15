import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
        <footer>
          {" "}
          <a
            href="https://github.com/iirinari/wa"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-source code by Iryna Rishko
         </footer>
      </div>
    </div>
  );
}


