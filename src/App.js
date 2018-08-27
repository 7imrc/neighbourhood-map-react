import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import SearchList from './components/SearchList';
import Map from './components/Map';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SearchList />
        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBRBUF2UVab_IvfyF7rJPQNzWaF8fs-dN8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
