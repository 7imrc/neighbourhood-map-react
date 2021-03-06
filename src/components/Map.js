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
            onCloseClick={props.whenInfoWindowClosed}
          >
            <div>
              <ul
                className="Infowindow-details"
                aria-label="Details of selected museum"
                tabIndex={0}
              >
                { //If no address held in Foursquare then notify user
                  (marker.location.address===undefined) &&
                  <div>
                    <li className="museum-title">{marker.name}</li>
                    <li className="no-address">No address available for this museum from Foursquare.</li>
                  </div>
                }
                { //Display address details from Foursquare
                  (marker.location.address!==undefined) &&
                  <div>
                    <li className="museum-title">{marker.name}</li>
                    <li>{marker.location.address}</li>
                    <li>{marker.location.city}</li>
                    <li>{marker.location.state}</li>
                    <li>{marker.location.postalCode}</li>
                  </div>
                }

              </ul>
            </div>
        </InfoWindow>)
      }
    </Marker>
  ))}

  </GoogleMap>
);

export default Map;
