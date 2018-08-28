import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchList extends Component {

  // Search query code based on Udacity lesson.
  state = {
        query: '',
        //venueSearch: []
    }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  render() {
    //console.log('venues array...',this.props.venues);
    let showingVenues;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingVenues = this.props.venues.filter( (venue) => match.test(venue.name));
    } else {
      showingVenues = this.props.venues
    }

    return (
      <div
        className = "search-items"
        style = {{ height: '80%', width: '30%', float: 'left' }}
      >
        <input
          className = "search-venues"
          type = "text"
          placeholder = "Enter a venue name"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        <ul>
          {showingVenues.map( (venue, index) => (

              <li
                key = {index}
                onClick = {(e) => this.props.whenMarkerClicked(index, venue.location.lat, venue.location.lng, e)}
              >
                {venue.name}
              </li>

          ))}
        </ul>
      </div>
    );
  }
};

export default SearchList;
