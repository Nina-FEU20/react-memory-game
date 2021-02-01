import React from "react";

//TODO
//Denna komponent ska vara ett memorykort som innehåller en siffra
//Den ska ha ett klickevent som håller koll på vilket kort du har klickat på
//När man klickar på det ska du dynamiskt lägga till CSS-klassen "flip"

function MemoryCard(props) {
  function handleClick(e) {
    props.setIsClicked([...props.isClicked, props.index]);

    if (props.firstCard === 0) {
      props.setFirstCard(props.image);
    } else {
      props.setLockGame(!props.lockGame);
      props.setSecondCard(props.image);
    }
  }

  function disable() {
    console.log("you cant turn the same card twice!");
  }

  return (
    <article
      className={props.className}
      onClick={
        props.className.includes("flip") || props.lockGame === true
          ? disable
          : handleClick
      }
    >
      <span className="front">
        <img src={props.image} alt="" />
      </span>
      <span className="back" id={props.number}></span>
    </article>
  );
}

export default MemoryCard;
