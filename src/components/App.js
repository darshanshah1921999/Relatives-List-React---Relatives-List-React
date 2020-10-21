import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["Darshan", "Prashil", "Prerak", "Jimit", "Shubham"];
    return (
      <>
        <ol>
          {relatives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
