import React, { Component } from 'react';

class SearchList extends Component {
  render() {
    console.log(this.props.venues);
    return (
      <div className="search-list" style={{ height: '80%', width: '100%' }}>
        <ul>
          {this.props.venues.map( (venue) => {
            return(
              <li>
                {venue.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default SearchList;
