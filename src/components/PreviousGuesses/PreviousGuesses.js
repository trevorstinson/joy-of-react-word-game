import React from 'react';

function PreviousGuesses({ previousGuesses }) {
  return (
    <div className="guess-results">
      {previousGuesses.map(({ id, label }) => (
        <p key={id} className="guess">
          {label}
        </p>
      ))}
    </div>
  );
}

export default PreviousGuesses;
