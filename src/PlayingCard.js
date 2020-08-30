import React, { useState } from 'react';
import backOfCard from './back.png';
import useFlip from './useFlip';
import './PlayingCard.css';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFlipped, toggleFlip] = useFlip();

  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp((isUp) => !isUp);
  // };
  return (
    <img
      src={isFlipped ? back : front}
      alt='playing card'
      onClick={toggleFlip}
      className='PlayingCard Card'
    />
  );
}

export default PlayingCard;
