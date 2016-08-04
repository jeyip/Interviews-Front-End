import React from 'react';

function SearchFilters() {
  return (
    <div id="searchFilters">
      <div>
        <input type="checkbox"></input>
        <p>Boarding</p>
      </div>
      <div>
        <input type="checkbox"></input>
        <p>Sitting</p>
      </div>
    </div>
  );
}

module.exports = SearchFilters;
