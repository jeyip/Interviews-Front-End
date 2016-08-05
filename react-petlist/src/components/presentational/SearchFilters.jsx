import React from 'react';

function SearchFilters({ toggleAllFilter, toggleBoardingFilter, toggleSittingFilter }) {
  return (
    <form id="searchFilters">
      <div>
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleAllFilter}>
        </input>
        <label>All</label>
      </div>
      <div>
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleBoardingFilter}>
        </input>
        <label>Boarding</label>
      </div>
      <div>
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleSittingFilter}>
        </input>
        <label>Sitting</label>
      </div>
    </form>
  );
}

SearchFilters.propTypes = {
  toggleAllFilter: React.PropTypes.func,
  toggleBoardingFilter: React.PropTypes.func,
  toggleSittingFilter: React.PropTypes.func,
}

module.exports = SearchFilters;
