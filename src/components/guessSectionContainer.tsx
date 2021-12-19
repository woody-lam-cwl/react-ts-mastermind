import React, { createContext, useContext, useRef, useState } from 'react';
import { GuessClickCallbackContext } from '../App';
import GuessContainer from './guessContainer';
import GuessOptionsContainer from './guessOptionsContainer';

export const GuessOptionCallbackContext = createContext(
  (_colourIndex: number) => {}
);

const buttonStyle: React.CSSProperties = {
  padding: '1rem',
  margin: '0.5rem',
  fontSize: '1rem',
  background: '#88CC88',
  borderRadius: '1rem',
};

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
      <div
        style={{
          margin: '0.5rem 0',
          padding: '0.5rem 0 0.5rem 0.5rem',
          border: '0.3rem solid #000000',
          borderRadius: '1rem',
        }}
      >
        <GuessContainer size={6} guess={guess} />
        <GuessOptionsContainer />
        <button style={buttonStyle} onClick={() => guessClickCallback(guess)}>
          Make Guess
        </button>
        <button style={buttonStyle} onClick={onResetClick}>
          Reset Guess
        </button>
      </div>
    </GuessOptionCallbackContext.Provider>
  );
};

export default GuessSectionContainer;
