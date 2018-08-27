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
        <Map />
        <Footer />
      </div>
    );
  }
}

export default App;
