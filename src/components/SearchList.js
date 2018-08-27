import React, { Component } from 'react';

let SearchList = (
      <div
        className = "search-list"
        style = {{ height: '80%', width: '30%', float: 'left' }}
      >
        <ul>
          {this.props.venues.map( (venue, index) => {

              <li
                key = {index}
                onClick = {(e) => this.props.whenMarkerClicked(index, venue.location.lat, venue.location.lng, e)}
              >
                {venue.name}<br/>{venue.location.lat}<br/>{venue.location.lng}
             </li>

          })}
        </ul>
      </div>
);



export default SearchList;
