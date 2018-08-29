import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

class SearchList extends Component {

  // Search query code based on Udacity lesson.
  state = {
        //query: '',
        venueSearch: []
    }

  // Update the query state as user enters text in input field.
  //updateQuery = (query) => {
  //  this.props.query.setState({ query: query })
  //}

  // Only display the matching markers to the filtered list
//  filterMarkers = (showingVenues) => {
//    this.setState({ venueSearch: showingVenues});
    //console.log('this is filterMarkers');
//  }

  //
//  filterMarkers = (showingVenues) => {
//    this.props.addFilteredVenues(showingVenues);
//  }



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
    //let spreadShowingVenues = [...showingVenues];
    //let kickToArray = [...this.state.venueSearch, showingVenues];
    //this.setState({
    //  venueSearch: showingVenues
    //});
    //let arrayShift = showingVenues;
    //this.filterMarkers(arrayShift);

    // Sort the venue names alphabetically
    showingVenues.sort(sortBy('name'));





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
          onChange={(event) => this.props.updateQuery(event.target.value)}
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
