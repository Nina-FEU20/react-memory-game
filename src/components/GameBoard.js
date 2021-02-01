import React, { useEffect, useState } from "react";
import MemoryCard from "./MemoryCard";

function GameBoard(props) {
  const [images, setImages] = useState([]);
  const [firstCard, setFirstCard] = useState(0);
  const [secondCard, setSecondCard] = useState(0);
  const [isClicked, setIsClicked] = useState([]);
  const [lockGame, setLockGame] = useState(false);

  useEffect(() => {
    async function getImages() {
      const key = "e97530c4db33a4ae21d65f765fe9c551";
      const response = await fetch(
        `https://www.flickr.com/services/rest/?api_key=${key}&method=flickr.photos.search&text=animal&format=json&nojsoncallback=1&page=2&page=1`
      );
      const data = await response.json();

      const fetchedImages = [];
      for (let i = 0; i < 8; i++) {
        fetchedImages.push(getImageUrl(data.photos.photo[i]));
        fetchedImages.push(getImageUrl(data.photos.photo[i]));
      }

      setImages(shuffle(fetchedImages));
    }

    getImages();
  }, []);

  function getImageUrl(photo) {
    let size = "q";
    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    return imgUrl;
  }

  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

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
