import React from 'react';

function SearchFilters({ toggleAllFilter, toggleBoardingFilter, toggleSittingFilter }) {
  return (
    <form>
      <div className="searchField">
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleAllFilter}>
        </input>
        <label>All <span className="subtext"><br/>Anywhere</span></label>
      </div>
      <div className="searchField">
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleBoardingFilter}>
        </input>
        <label>Boarding <span className="subtext"><br/>At host's home</span></label>
      </div >
      <div className="searchField">
        <input name="searchFilter" 
               type="radio" 
               onChange={toggleSittingFilter}>
        </input>
        <label>Sitting <span className="subtext"><br/>At my home</span></label>
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
