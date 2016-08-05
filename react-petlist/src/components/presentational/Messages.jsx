import React from 'react';

function Messages({ searchResults }) {
  const resultsToDisplay = [];

  for (let i = 0; i < searchResults.length; i++) {
    resultsToDisplay.push(
      <div id="singleResult">
        <h2>{searchResults[i].title}</h2>
        <h3>{searchResults[i].url}</h3>
        <h3>{searchResults[i].user.first} {searchResults[i].user.last} | {searchResults[i].pet.name}
        </h3>
        <p>{searchResults[i].description}</p>
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
