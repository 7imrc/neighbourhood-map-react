import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    //console.log('venues array...',this.props.venues);
    return (
      <div
        className = "search-items"
        style = {{ height: '80%', width: '30%', float: 'left' }}
      >
        <input
          className = "text-field"
          type = "text"
        />
        <ul>
          {this.props.venues.map( (venue, index) => (

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
