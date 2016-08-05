import React from 'react';

function SearchFilters({ toggleAllFilter, toggleBoardingFilter, toggleSittingFilter }) {
  return (
    <div id="searchFilters">
      <div>
        <input name="searchFilter" type="radio" onChange={toggleAllFilter}></input>
        <p>All</p>
      </div>
      <div>
        <input name="searchFilter" type="radio" onChange={toggleBoardingFilter}></input>
        <p>Boarding</p>
      </div>
      <div>
        <input name="searchFilter" type="radio" onChange={toggleSittingFilter}></input>
        <p>Sitting</p>
      </div>
    </div>
  );
}

SearchFilters.propTypes = {
  toggleAllFilter: React.PropTypes.func,
  toggleBoardingFilter: React.PropTypes.func,
  toggleSittingFilter: React.PropTypes.func,
}

module.exports = SearchFilters;
