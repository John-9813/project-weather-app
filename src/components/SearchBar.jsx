import React, { useState } from 'react'; // importo l'hook useState
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState(''); // definisce lo stato per il nome della città

  const handleSubmit = (e) => {
    e.preventDefault(); // previene il comportamento predefinito del form

    if (city.trim()) {  //  prendo il valore della città dal campo di input rimuove gli spazi bianchi

      onSearch(city); // chiama la funzione onSearch con il nome della città
      setCity(''); // resetta il campo città
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex mt-2">
      <Form.Control
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit" className="ms-2">
        Search
      </Button>
    </Form>
  );
};

export default SearchBar;
