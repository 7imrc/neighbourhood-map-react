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
    defaultZoom={12}
    defaultCenter={{ lat: 50.8197675, lng: -1.0879769 }}
  >
    <Marker
      position={{ lat: 50.8197675, lng: -1.0879769 }}
      onClick={props.onToggleOpen}
    >
      {props.isOpen &&
        <InfoWindow onCloseClick={props.onToggleOpen}>
          <div>Contents of InfoWindow</div>
        </InfoWindow>
      }
    </Marker>
  </GoogleMap>
);

export default Map;
