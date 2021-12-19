import React from 'react';
import HistoryContainerProps from '../interfaces/historyContainerProps';
import GuessHistory from './guessHistory';

const HistoryContainer = (props: HistoryContainerProps) => {
  return (
    <div>
      {props.guessHistory.map((guess, guessIndex) => (
        <GuessHistory
          key={guessIndex}
          guess={guess.guess}
          whiteCount={guess.whiteCount}
          redCount={guess.redCount}
        />
      ))}
    </div>
  );
};

export default HistoryContainer;
