import React from 'react';
import { range } from '../../utils';

function Guess({ guess, grades }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={!!grades ? `cell ${grades[index]?.status}` : 'cell'}
        >
          {guess && guess[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
