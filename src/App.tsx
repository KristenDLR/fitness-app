import React from 'react';
import Session from "./pages/Sessions";
import './App.css';
// import db from "../db";

function App() {
  // console.log(db);

  return (
    <div className="App">
      <header className="App-header">
        <Session />
      </header>
    </div>
  );
}

export default App;
