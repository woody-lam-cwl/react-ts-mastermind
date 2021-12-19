import React from 'react';
import colours from '../const/colours';
import ResultContainerProps from '../interfaces/resultContainerProps';
import Circle from './circle';

const ResultContainer = (props: ResultContainerProps) => {
  const result: number[] = [];
  result.push(...Array<number>(props.redCount).fill(1));
  result.push(...Array<number>(props.whiteCount).fill(5));
  result.push(...Array<number>(4 - result.length).fill(0));
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gridTemplateRows: 'auto auto',
      }}
    >
      {result.map((colourIndex, key) => (
        <Circle
          key={key}
          size={1}
          colour={colours[colourIndex]}
          onClick={() => {}}
        />
      ))}
    </div>
  );
};

export default ResultContainer;
