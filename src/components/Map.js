// Code based on that provided by the react-google-map documentation
// from https://tomchentw.github.io/react-google-maps/#infowindow
import React from 'react';
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const Map = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.location}
  >

  { // For each marker stored in the marker state array, assign an
    //associated marker.

    props.markers.map( (marker, index) => (
    <Marker
      key = {index}
      position = {{ lat: marker.location.lat, lng: marker.location.lng }}
      title = {marker.name}
      onClick = {(e) => props.whenMarkerClicked(index, marker.position, e)}
    >
      {props.selectedMarkerIndex === index &&
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>{marker.name}</div>
        </InfoWindow>
      }
    </Marker>
  ))}

  </GoogleMap>
);

export default Map;
