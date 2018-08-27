import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchList from './components/SearchList';
import Map from './components/Map';
import Footer from './components/Footer';


class App extends Component {

  // Set the states for the app.
    state = {
      venues: []
    }

  componentDidMount() {
      // Get the external data.
      this.fourSquareLoad();
    }

    // Fetch the data from FourSquare to populate the map.
    fourSquareLoad = () => {
      fetch ("https://api.foursquare.com/v2/venues/search?ll=50.8197675,-1.0879769&intent=browse&radius=30000&query=museum&client_id=HAXM4EPTKFN0LVOHYTA312KBRVX1FXE0SXVFUYCJJKTCYL0J&client_secret=IJC5CLYWJ4R4GDYSUGH3TJ24DP4JAWBKSC2A0GNXJSBVDVCO&v=20180824")
          .then( (response) => response.json())
          .then( (response) => {
            // Error checking to see if received data is in correct format
            console.log(response.response.venues)
            return response
          })
          // Pass the received data in the correct format to be stored in the empty
          // venues array in state.
          .then( (data) => {
            this.setState({
              venues: data.response.venues
            })
          })
          // Error checking, log the contents of the venues array, to compare.
          .then( () => {
            console.log(this.state.venues)
          })
          // If unable to obtain data from Foursquare, alert the user.
          .catch ( (error) => {
            alert("There has been a problem trying to get the locations data from Foursquare......please try again");
          })
    }




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
