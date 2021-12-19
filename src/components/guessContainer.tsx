import React from 'react';
import colours from '../const/colours';
import GuessContainerProps from '../interfaces/guessContainerProps';
import Circle from './circle';

const GuessContainer = (props: GuessContainerProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {props.guess.map((colourIndex, index) => {
        return (
          <Circle
            key={index}
            size={props.size}
            colour={colours[colourIndex]}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default GuessContainer;
