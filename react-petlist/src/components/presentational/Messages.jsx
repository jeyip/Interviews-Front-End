import React from 'react';

function Messages({ searchResults }) {
  const resultsToDisplay = [];
  let result;

  for (let i = 0; i < searchResults.length; i++) {
    result = searchResults[i];
    resultsToDisplay.push(
      <div id="singleResult">
        <h2>{result.title}</h2>
        <h3>{result.url}</h3>
        <h3>{result.user.first} {result.user.last} | {result.pet.name}</h3>
        <p>{result.description}</p>
      </div>
    )
  }

  return (
    <div>
      { resultsToDisplay }
    </div>
  );
}

Messages.propTypes = {
  searchResults: React.PropTypes.array,
}

module.exports = Messages;
