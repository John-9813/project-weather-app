import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CityList = ({ cities, onCityClick }) => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    onCityClick(city);
    navigate('/weather'); // Questa parte assicura che si navighi alla pagina del meteo
  };

  return (
    <ListGroup>
      {cities.map((city) => (
        <ListGroup.Item
          key={city}
          onClick={() => handleCityClick(city)}
          className= "city-listed"  // Aggiungi il cursore a 'pointer'
        >
          {city}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;

