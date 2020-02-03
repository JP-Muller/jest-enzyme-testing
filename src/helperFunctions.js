import React from 'react'

export const getSum = (num1, num2) => {
    return num1 + num2
}

export const getWeatherIcon = weatherDescription => {
    if (weatherDescription === null) {
      return <i className="far fa-sad-tear" title="Unknown" />;
    } else if (weatherDescription.toLowerCase() === "clear sky") {
      return <i className="far fa-sun" title="Clear Skies" />;
    } else if (weatherDescription.toLowerCase() === "few clouds") {
      return <i className="fas fa-cloud-sun" title="Few Clouds" />;
    } else if (weatherDescription.toLowerCase() === "scattered clouds") {
      return <i className="fas fa-cloud" title="Scattered Clouds" />;
    } else if (weatherDescription.toLowerCase() === "broken clouds") {
      return <i className="fas fa-cloud" title="Broken Clouds" />;
    } else if (weatherDescription.toLowerCase() === "overcast clouds") {
      return <i className="fas fa-cloud" title="Overcast Clouds" />;
    } else if (weatherDescription.toLowerCase() === "shower rain") {
      return <i className="fas fa-cloud-showers-heavy" title="Shower Rain" />;
    } else if (weatherDescription.toLowerCase() === "heavy intensity rain") {
      return <i className="fas fa-cloud-showers-heavy" title="High Intensity Rain" />;
    } else if (weatherDescription.toLowerCase() === "rain") {
      return <i className="fas fa-cloud-rain" title="Rain" />;
    } else if (weatherDescription.toLowerCase() === "light rain") {
      return <i className="fas fa-cloud-rain" title="Light Rain" />;
    } else if (weatherDescription.toLowerCase() === "moderate rain") {
      return <i className="fas fa-cloud-rain" title="Moderate Rain" />;
    } else if (weatherDescription.toLowerCase() === "thunderstorm") {
      return <i className="fas fa-poo-storm" title="Thunderstorm" />;
    } else if (weatherDescription.toLowerCase() === "snow") {
      return <i className="far fa-snowflake" title="Snow" />;
    } else if (weatherDescription.toLowerCase() === "light snow") {
      return <i className="far fa-snowflake" title="Light Snow" />;
    } else if (weatherDescription.toLowerCase() === "mist") {
      return <i className="fas fa-smog" title="Misty" />;
    } else if (weatherDescription.toLowerCase() === "haze") {
      return <i className="fas fa-smog" title="Hazy" />;
    } else if (weatherDescription.toLowerCase() === "smoke") {
      return <i className="fas fa-smog" />;
    } else {
      return <i className="far fa-sad-tear" title="Unknown" />;
    }
  };