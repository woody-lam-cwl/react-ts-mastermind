import React, { useContext } from 'react';
import colours from '../const/colours';
import Circle from './circle';
import { GuessOptionCallbackContext } from './guessSectionContainer';

const GuessOptionsContainer = () => {
  const guessOptionCallback = useContext(GuessOptionCallbackContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {colours.slice(1, 6).map((colour, index) => (
        <Circle
          key={index}
          size={5}
          colour={colour}
          onClick={() => guessOptionCallback(index + 1)}
        />
      ))}
    </div>
  );
};

export default GuessOptionsContainer;
