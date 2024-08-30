import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // importa l'hook useNavigate per la navigazione

const CityList = ({ cities, onCityClick }) => {
  const navigate = useNavigate();

  const handleCityClick = (city) => {
    onCityClick(city); // chiama la funzione onCityClick con il nome della città
    navigate('/weather'); // naviga alla pagina del meteo
  };

  return (
    <ListGroup>
      {cities.map((city) => (
        <ListGroup.Item
          key={city}
          onClick={() => handleCityClick(city)}
          className= "city-listed"  // Aggiungi il cursore a 'pointer' da app.css
        >
          {city}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CityList;

