import React, { createContext, useContext, useRef, useState } from 'react';
import { GuessClickCallbackContext } from '../App';
import GuessContainer from './guessContainer';
import GuessOptionsContainer from './guessOptionsContainer';

export const GuessOptionCallbackContext = createContext(
  (_colourIndex: number) => {}
);

const GuessSectionContainer = () => {
  const guessClickCallback = useContext(GuessClickCallbackContext);
  const [guess, setGuess] = useState([0, 0, 0, 0]);
  const activeGuessIndex = useRef(0);

  const onGuessOptionClick = (colourIndex: number) => {
    var guessClone = [...guess];
    guessClone[activeGuessIndex.current] = colourIndex;
    setGuess(guessClone);
    if (activeGuessIndex.current < 3) activeGuessIndex.current++;
  };

  const onResetClick = () => {
    setGuess([0, 0, 0, 0]);
    activeGuessIndex.current = 0;
  };

  return (
    <GuessOptionCallbackContext.Provider value={onGuessOptionClick}>
      <div>
        <GuessContainer size={6} guess={guess} />
        <GuessOptionsContainer />
        <button onClick={() => guessClickCallback(guess)}>Make Guess</button>
        <button onClick={onResetClick}>Reset Guess</button>
        <div>
          <a href="https://www.github.com/woody-lam-cwl/react-ts-mastermind">
            Github Repository
          </a>
        </div>
      </div>
    </GuessOptionCallbackContext.Provider>
  );
};

export default GuessSectionContainer;
