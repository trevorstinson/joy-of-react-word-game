import React from 'react';

function GuessInput({ handleSetResults }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmitGuess(event) {
    event.preventDefault();
    console.log({ guess });

    handleSetResults(guess);

    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Five-letter word"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
