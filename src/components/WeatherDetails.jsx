import React from 'react';
import { ListGroup } from 'react-bootstrap';

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, wind } = weatherData;

  return (
    <ListGroup className="mt-4">
      <ListGroup.Item>Humidity: {main.humidity}%</ListGroup.Item>
      <ListGroup.Item>Pressure: {main.pressure} hPa</ListGroup.Item>
      <ListGroup.Item>Wind Speed: {wind.speed} m/s</ListGroup.Item>
    </ListGroup>
  );
};

export default WeatherDetails;
