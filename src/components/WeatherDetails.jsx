import React from 'react';
import { ListGroup } from 'react-bootstrap';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null; // non mostra nulla se non ci sono dati meteo

  const { main, wind } = weatherData; // destruttura i dati meteo

  return (
    <ListGroup className="mt-4">
       <ListGroup.Item>💧 Humidity: {main.humidity}%</ListGroup.Item> 
      <ListGroup.Item>🧭 Pressure: {main.pressure} hPa</ListGroup.Item> 
      <ListGroup.Item>🌬️ Wind Speed: {wind.speed} m/s</ListGroup.Item> 
    </ListGroup>
  );
};

export default WeatherDetails;
