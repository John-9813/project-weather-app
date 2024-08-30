import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return <p>No data available. Please search for a city.</p>; // mostro un messaggio se non ci sono dati meteo

  const { name, main, weather } = weatherData; // destruttura i dati meteo

  return (
    <Card className="text-center mt-4">
      <Card.Body>
        <Card.Title>{name}</Card.Title> {/* nome della città */}
        <Card.Img
          variant="top"
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt="weather icon"
        /> {/* icona meteo che varia dal tipo di meteo ottenuto */}
        <h2>{Math.round(main.temp - 273.15)}°C</h2> {/* temperatura attuale calcolata (cercato online perche non sapevo come fare la conversione) in gradi Celsius */}
        <Card.Text>
          {weather[0].description} {/* descrizione del meteo */}
        </Card.Text>
        <Card.Text>
          Min: {Math.round(main.temp_min - 273.15)}°C, Max: {Math.round(main.temp_max - 273.15)}°C {/* temperature minima e massima */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherDisplay;


