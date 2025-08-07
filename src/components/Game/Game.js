import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import Results from '../Results/Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);

  function handleSetResults(nextGuess) {
    setResults([...results, nextGuess]);
  }

  return (
    <>
      <Results results={results} answer={answer}></Results>
      <GuessInput handleSetResults={handleSetResults}></GuessInput>
    </>
  );
}

export default Game;
