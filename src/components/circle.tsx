import React from 'react';
import CircleProps from '../interfaces/circleProps';

const Circle = (props: CircleProps) => (
  <div
    style={{
      border: `${props.size / 40}rem  solid #0000FF`,
      borderRadius: `${props.size}rem`,
      width: `${props.size}rem`,
      height: `${props.size}rem`,
      backgroundColor: props.colour,
      margin: `${props.size / 4}rem`,
    }}
    onClick={props.onClick}
  ></div>
);

export default Circle;
