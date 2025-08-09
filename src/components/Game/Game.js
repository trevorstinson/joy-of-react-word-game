import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GameEndBanner from '../GameEndBanner/GameEndBanner';
import GuessInput from '../GuessInput/GuessInput';
import Results from '../Results/Results';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [results, setResults] = React.useState([]);
  const [isGameEnded, setIsGameEnded] = React.useState(false);
  const [isGameWon, setIsGameWon] = React.useState(false);

  function handleSetResults(nextGuess) {
    const nextResults = [...results, nextGuess];
    setResults(nextResults);

    if (nextGuess === answer) {
      setIsGameWon(true);
      setIsGameEnded(true);
    }

    if (NUM_OF_GUESSES_ALLOWED === nextResults.length) {
      setIsGameEnded(true);
    }
  }

  return (
    <>
      <Results results={results} answer={answer}></Results>
      {isGameEnded ? (
        <GameEndBanner
          isGameWon={isGameWon}
          numOfGuesses={results.length}
          answer={answer}
        ></GameEndBanner>
      ) : (
        <GuessInput handleSetResults={handleSetResults}></GuessInput>
      )}
    </>
  );
}

export default Game;
