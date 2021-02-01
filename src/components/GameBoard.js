import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";
import FetchImages from "./FetchImages";

function GameBoard(props) {
  const [images, setImages] = useState([]);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  const [isClicked, setIsClicked] = useState([]);
  const [lockGame, setLockGame] = useState(false);

  useEffect(() => {
    compareCards();
  }, [secondCard]);

  function updateScore() {
    props.setPoints(props.points + 1);
  }

  function compareCards() {
    if (firstCard === secondCard && firstCard !== 0) {
      setTimeout(function () {
        updateScore();
        reset();
      }, 1000);
    } else if (firstCard !== 0) {
      setTimeout(function () {
        reset();
        setIsClicked(isClicked.splice(0, isClicked.length - 2));
      }, 1000);
    }
  }

  function reset() {
    setFirstCard(0);
    setSecondCard(0);
    setLockGame(!lockGame);
  }

  return (
    <div className="game-board">
      <FetchImages setImages={setImages} />
      {images.map((image, index) => {
        return (
          <MemoryCard
            className={
              isClicked.includes(index) ? "memory-card flip" : "memory-card"
            }
            image={image}
            index={index}
            // number={number}
            key={index}
            firstCard={firstCard}
            secondCard={secondCard}
            setFirstCard={setFirstCard}
            setSecondCard={setSecondCard}
            setIsClicked={setIsClicked}
            isClicked={isClicked}
            lockGame={lockGame}
            setLockGame={setLockGame}
          />
        );
      })}
    </div>
  );
}

export default GameBoard;
