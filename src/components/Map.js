// Code based on that provided by the react-google-map documentation
// from https://tomchentw.github.io/react-google-maps/#infowindow
import React from 'react';
const { compose, withProps, withStateHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");

const Map = compose(
  withStateHandlers( () => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={{ lat: 50.8197675, lng: -1.0879769 }}
  >

  { // For each marker stored in the marker state array, assign an
    //associated marker.

    props.markers.map( (marker, index) => (
    <Marker
      key = {index}
      position = {{ lat: marker.location.lat, lng: marker.location.lng }}
      title = {marker.name}
      onClick = {(index) => props.whenMarkerClicked(index)}
    >
      {
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>{marker.name}</div>
        </InfoWindow>
      }
    </Marker>
  ))}

  </GoogleMap>
);

export default Map;
