// Code based on that provided by the react-google-map documentation
// from https://tomchentw.github.io/react-google-maps/#infowindow
import React from 'react';
const { compose, lifecycle } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const Map = compose(

  lifecycle({
    componentDidMount() {
      //Error handling for Google Maps authentication failure
      window.gm_authFailure = () => {
        alert("There has been a problem with the Google Maps authentication code");
      }
    }
  }),

  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    zoom={props.zoom}
    center={props.location}
  >

  { // For each marker stored in the marker state array, assign an
    //associated marker.

    props.filteredVenues.map( (marker, index) => (
    <Marker
      key = {index}
      position = {{ lat: marker.location.lat, lng: marker.location.lng }}
      title = {marker.name}
      onClick = {(e) => props.whenMarkerClicked(index, marker.location.lat, marker.location.lng, e)}
      // Need to selectively change icon colour here, if do it in the
      // whenMarkerClicked function, all the markers are changed.
      icon = {(props.selectedMarkerIndex === index) ? "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" : "http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
    >
      {(props.selectedMarkerIndex === index) &&
        (<InfoWindow
            tabIndex={0}
            aria-label="Details of selected museum"
            onCloseClick={props.whenInfoWindowClosed}>
          <div tabIndex={0} >{marker.name}</div>
        </InfoWindow>)
      }
    </Marker>
  ))}

  </GoogleMap>
);

export default Map;
