import React from 'react';
import Messages from '../presentational/Messages.jsx';
import SearchFilters from '../presentational/SearchFilters.jsx';
import 'whatwg-fetch';
import { capitalizeFirstName, 
         shortenDescription, 
         truncateLastName, 
         formatURL } from '../../utils/formatHelper.js';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
    }
    this.toggleAllFilter = this.toggleAllFilter.bind(this);
    this.toggleBoardingFilter = this.toggleBoardingFilter.bind(this);
    this.toggleSittingFilter = this.toggleSittingFilter.bind(this);
  }

  componentDidMount() {
    this.queryDatabase('/static/search.json');
  }

  formatSearchResults(results, route) {
    for (let i = 0; i < results.length; i++) {
      results[i].user.first = capitalizeFirstName(results[i].user.first);
      results[i].user.last = truncateLastName(results[i].user.last);
      results[i].description = shortenDescription(results[i].description);
      results[i].url = formatURL(`http://localhost:3000/${route}`);
    }
    return results;
  }

  toggleAllFilter(event) {
    this.queryDatabase('/static/search.json');
  }

  toggleBoardingFilter(event) {
    this.queryDatabase('/static/search.json?service=boarding');
  }

  toggleSittingFilter(event) {
    this.queryDatabase('/static/search.json?service=sitting');
  }

  queryDatabase(route) {
    fetch(route)
      .then(response => response.json())
      .then((searchResults) => {
        const formattedResults = this.formatSearchResults(searchResults.search, route);
        this.setState({ searchResults: formattedResults });
      })
  }

  render() {
    return (
      <div>
        <SearchFilters toggleAllFilter={this.toggleAllFilter}
                       toggleBoardingFilter={this.toggleBoardingFilter}
                       toggleSittingFilter={this.toggleSittingFilter} />
        <Messages searchResults={this.state.searchResults}/>
      </div>
    );
  }
}

module.exports = Content;
