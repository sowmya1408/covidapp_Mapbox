import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "../App.css";



const MapComponent = ({
  handleChange,
  viewport,
  covidData,
  handleClick,
  selectedCountry,
  handleClose,
}) => {
    console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={handleChange}
      mapStyle="mapbox://styles/sowmyam14/ckfzkh5jy1bin19niv83fane1"
    >
      {covidData.map((countryData) => (
        <Marker
          key={countryData.country}
          latitude={countryData.countryInfo.lat}
          longitude={countryData.countryInfo.long}
        >
          <button
            className="marker-btn"
            onClick={(e) => handleClick(e, countryData)}
          >
            <img src="/location.svg" alt="locate country" />
          </button>
        </Marker>
      ))}
      {selectedCountry && (
        <Popup
          latitude={selectedCountry.countryInfo.lat}
          longitude={selectedCountry.countryInfo.long}
          onClose={handleClose}
        >
          <ul>
            <li>cases: {selectedCountry.cases}</li>
            <li>active: {selectedCountry.active}</li>
            <li>deaths: {selectedCountry.deaths}</li>
          </ul>
        </Popup>
      )}
    </ReactMapGL>
  );
};

export default MapComponent;
