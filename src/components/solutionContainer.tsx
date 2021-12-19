import React from 'react';
import GuessContainer from './guessContainer';

const SolutionContainer = (props: { solution: number[] }) => (
  <div
    style={{
      margin: '0.5rem 0',
      padding: '0.5rem 0 0.5rem 0.5rem',
      border: '0.3rem solid #000000',
      borderRadius: '1rem',
    }}
  >
    <h3>The solution is:</h3>
    <GuessContainer size={6} guess={props.solution} />
  </div>
);

export default SolutionContainer;
