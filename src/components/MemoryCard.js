import React from "react";

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
      <span className="back"></span>
    </article>
  );
}

export default MemoryCard;
