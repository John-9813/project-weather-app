import React from 'react';
import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';

const HomePage = ({ onCityClick }) => {
  const cities = ['Milano', 'Roma', 'New York', 'Berlino', 'Tokyo', 'Rio de Janeiro']; // lista delle città in home page (ho preferito lasciare delle opzioni predefinite)

  return (
    <div>
      <h2 className="text-center my-4">Select a City</h2>
      <CityList cities={cities} onCityClick={onCityClick} /> {/* aggiunta lista delle città */}
      <SearchBar onSearch={onCityClick} />
    </div>
  );
};

export default HomePage;