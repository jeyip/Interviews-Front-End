import React from 'react';
import SearchFilters from '../presentational/SearchFilters.jsx';

class SearchHeader extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBoardingFilter = this.toggleBoardingFilter.bind(this);
  }

  toggleBoardingFilter(event) {
    return;
  }

  render() {
    return (
      <div>
        <h3>Looking for: </h3>
        <SearchFilters />
      </div>
    );
  }
}

module.exports = SearchHeader;
