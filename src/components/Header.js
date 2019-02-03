import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1
          tabIndex={0}
          aria-label="Webpage name"
        >Museums near Portsmouth</h1>
      </div>
    );
  }
};

export default Header;
