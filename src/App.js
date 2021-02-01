import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [points, setPoints] = useState(0);

  return (
    <section className="main-section">
      <div className="header">
        <h1>Can you find all the matching cards?</h1>
      </div>
      {points === 8 ? (
        <div className="winner">
          <h1>You won!</h1>
          <button onClick={() => setPoints(0)}>Play Again!</button>
        </div>
      ) : (
        <section className="memory-cards">
          <h4>Current Points: {points}</h4>
          <GameBoard setPoints={setPoints} points={points} />
        </section>
      )}
    </section>
  );
}

export default App;
