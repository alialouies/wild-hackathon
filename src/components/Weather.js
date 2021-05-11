import React from "react";

const Weather = () => {
  return (
    <div>
      <iframe
        src="https://mars.nasa.gov/layout/embed/image/m20weather/"
        width="100%"
        height="750"
        scrolling="no"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Weather;
