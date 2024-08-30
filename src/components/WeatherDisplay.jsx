import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p>No data available. Please search for a city.</p>;

  const { name, main, weather } = weatherData;

  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        />
        <h2>{Math.round(main.temp - 273.15)}°C</h2>
        <Card.Text>
          {weather[0].description}
        </Card.Text>
        <Card.Text>
          Min: {Math.round(main.temp_min - 273.15)}°C, Max: {Math.round(main.temp_max - 273.15)}°C
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;


