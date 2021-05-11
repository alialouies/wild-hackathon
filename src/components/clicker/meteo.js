import React, { useEffect, useState } from "react";
import PresentDay from "./PresentDay";
import Nav from "./Nav";
import Footer from "./Footer";

import "../stylesheets/App.scss";

const URL =
  "https://api.nasa.gov/insight_weather/?api_key=Xi7kDXdua8ZvSchutEO6o2WltPaq9JDAsGuccWJE&feedtype=json&ver=1.0";

function Meteo() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    sol: "",
    minTemp: "",
    maxTemp: "",
    season: "",
    solDate: "",
    avgPressure: "",
    // horizontalWindSpeed: "",
  });

  function getWeather() {
    return fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        const { sol_keys, validity_checks, ...solData } = data;

        return Object.entries(solData).map(([sol, data]) => {
          if (sol_keys[sol_keys.length - 1] === sol) {
            return {
              sol: sol,
              maxTemp: data?.PRE?.mx,
              minTemp: data?.PRE?.mn,
              date: new Date(data?.First_UTC),
              season: data?.Season,
              // horizontalWindSpeed: data?.HWS.av,
              avgPressure: data?.PRE?.av,
            };
          } else {
            return null;
          }
        });
      });
  }

  useEffect(() => {
    getWeather().then((weather) => {
      for (let i = 0; i < weather.length; i++) {
        if (weather[i] !== null) {
          setWeather({
            sol: weather[i].sol,
            minTemp: weather[i].minTemp,
            maxTemp: weather[i].maxTemp,
            season: weather[i].season,
            solData: weather[i].date,
            // // horizontalWindSpeed: weather[i].horizontalWindSpeed,
            avgPressure: weather[i].avgPressure,
          });
        }

        setLoading(false);
      }
    });
  }, []);

  return (
    <div className="App">
      <Nav />

      {loading ? (
        <div className="loading-animation--parent">
          <div className="loading-animation">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <PresentDay
          sol={weather.sol}
          minTemp={weather.minTemp}
          maxTemp={weather.maxTemp}
          season={weather.season}
          date={weather.date}
          pressure={weather.avgPressure}
          // windSpeed={weather.horizontalWindSpeed}
        ></PresentDay>
      )}

      <Footer />
    </div>
  );
}

export default Meteo;