import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchList extends Component {

  // Search query code based on Udacity lesson.
  state = {
        venueSearch: []
    }

  render() {
    //console.log('venues array...',this.props.venues);

    // Filter the locations in the search list to those matching locations for
    // text entered in the input field.  Code based on that in Udacity lessons.
    let showingVenues;
    if (this.props.query) {
      const match = new RegExp(escapeRegExp(this.props.query), 'i');
      showingVenues = this.props.venues.filter( (venue) => match.test(venue.name));
      //console.log('showingVenues...', showingVenues);
      //this.props.filterMarkers(showingVenues, this.state.query);
      //this.filterMarkers(showingVenues);
      //return showingVenues;
    } else {
      showingVenues = this.props.venues;
      //return showingVenues;
    }

    // Sort the venue names alphabetically
    showingVenues.sort(sortBy('name'));

    return (
      <div
        className = "search-items"
        tabIndex = {0}
      >
        <input
          className = "search-venues"
          type = "text"
          aria-label = "Enter a venue name"
          placeholder = "Enter a venue name"
          value={this.state.query}
          onChange={(event) => this.props.updateQuery(event.target.value)}
        />
        <ul
          tabIndex = {0}
          aria-label = "List of museums in Portsmouth"
        >
          {showingVenues.map( (venue, index) => (

              <li
                key = {index}
                onClick = {(e) => this.props.whenMarkerClicked(index, venue.location.lat, venue.location.lng, e)}
                onKeyPress = { (e) => this.props.whenKeyPressed(index, venue.location.lat, venue.location.lng, e)}
                tabIndex = {0}
                role = "menuitem"
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
