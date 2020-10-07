import React, { useState, useEffect } from "react";
import MapComponent from "../component/MapComponent";

const CovidDataFetch = () => {
  const [covidData, setCovidData] = useState([]);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    zoom: 4,
    latitude: 56,
    longitude: 10,
  });

  const [selectedCountry, setSelecedCountry] = useState(null);

  const handleViewportChange = (viewport) => setViewport(viewport);

  const handleClick = (event, country) => {
    event.preventDefault();
    setSelecedCountry(country);
  };

  const handleClose = () => setSelecedCountry(null);
  useEffect(() => {
    const fetchCoviddata = async () => {
      try {
        const fetchData = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );

        const getDataInJson = await fetchData.json();
        setCovidData(getDataInJson);
      } catch (err) {
        return `Error: ${err}`;
      }
    };
    fetchCoviddata();
  }, []);


  return (
    <div>
      <MapComponent
        handleChange={handleViewportChange}
        viewport={viewport}
        covidData={covidData}
        selectedCountry={selectedCountry}
        handleClick={handleClick}
        setSelecedCountry={setSelecedCountry}
        handleClose={handleClose}
      />
    </div>
  );
};

export default CovidDataFetch;
