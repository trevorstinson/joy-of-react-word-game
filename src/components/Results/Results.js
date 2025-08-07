import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function Results({ results, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess
          key={index}
          guess={results[index]}
          grades={checkGuess(results[index], answer)}
        ></Guess>
      ))}
    </div>
  );
}

export default Results;
