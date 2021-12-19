import React from 'react';
import Guess from '../interfaces/guess';
import GuessContainer from './guessContainer';
import ResultContainer from './resultContainer';

const GuessHistory = (props: Guess) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '0.5em',
        padding: '0.5em',
        border: '0.1em solid #333333',
        borderRadius: '1em',
      }}
    >
      <GuessContainer size={2} guess={props.guess} />
      <ResultContainer
        redCount={props.redCount}
        whiteCount={props.whiteCount}
      />
    </div>
  );
};

export default GuessHistory;
