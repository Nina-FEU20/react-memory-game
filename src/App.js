import React, { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";

function App() {
  const [points, setPoints] = useState(0);
  const [moves, setMoves] = useState(0);

  function handleClick() {
    setPoints(0);
    setMoves(0);
  }

  return (
    <section className="main-section">
      <div className="header">
        <h1>Can you find all the matching cards?</h1>
      </div>
      {points === 8 ? (
        <div className="winner">
          <h1>You won!</h1>
          <h2>It took you {moves} times!</h2>
          <button onClick={handleClick}>Play Again!</button>
        </div>
      ) : (
        <section className="memory-cards">
          <div className="score">
            <h4>Current Points: {points}</h4>
            <h4>Moves: {moves}</h4>
          </div>
          <GameBoard
            setPoints={setPoints}
            points={points}
            moves={moves}
            setMoves={setMoves}
          />
        </section>
      )}
    </section>
  );
}

export default App;
