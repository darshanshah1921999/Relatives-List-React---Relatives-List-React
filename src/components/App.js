import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const relatives = ["Darshan", "Prashil", "Prerak", "Jimit", "Shubham"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((index, item) => (
            <li key={`relativeListItem${index + 1}`}>{item}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
