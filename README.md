# Portsmouth Museums - A Neighbourhod Map (React) Project

This Udacity project required me to produce a single-page application featuring a map of a neighbourhood of my choice - Portsmouth.

Functionality has been added to this map to show highlighted locations, third-party data about those locations and various ways to browse that content.

## Installing

This project was created using Create React App.  As such you can view the development environment by:

1. Clone this repo.
2. In a terminal, install all project dependencies with `npm install`.
3. Then, start the development server with `npm start`.
4. This will automatically open a webpage `localhost:3000`, where you can access the app.

Note that the service worker will not work in the development mode.  It is included within the production build:

1. Clone this repo.
2. In a terminal, install all project dependencies with `npm install`.
3. `npm run build` will create a `build` directory with a production build of the app.
4. `npm install -g serve`.
5. `serve -s build`.
4. This will serve your static site on the port `localhost:5000`.

## API Keys

For submission of this project, I have left my personal API keys in place to aid the reviewer.  As soon as the review is completed, these keys will be removed and you will need to obtain your own keys:

* You will need to obtain your own Google maps API key from [here](https://developers.google.com/maps/documentation/javascript/get-api-key).  Once you have done this, replace the text `YOUR_GOOGLE_MAPS_API_KEY` in `App.js`.
* You will also need to obtain your own Foursquare API key by first registering from [here](https://foursquare.com/developers/apps).  Once you have the Foursquare API key, replace the text `YOUR_FOURQUARE_API_KEY` in `App.js`.

## Using the App

This app will return data for all museums (listed by foursquare.com) in the vicinity of Portsmouth and display them graphically on a map.

The user can access some extra data about the museum by:

* Selecting the name of the museum in the scroll list.
* Clicking directly on the icon on the map.

In addition, the list of museums can be filtered by entering the name within the text input box.

At present, the extra data provided about the museum is it's address.  In some cases, Foursquare has not provided these details, and in these cases it is annotated as unavailable at this time.

## Acknowledgements

Third-party data for this project was obtained from [Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key) and [Foursquare](https://developer.foursquare.com/).

Details on how React works within this project can be found [here](https://reactjs.org/).
