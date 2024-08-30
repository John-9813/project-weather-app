
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import ContactPage from './components/ContactPage';
import Navbar from './components/MyNavbar';
import Footer from './components/Footer';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherDetails from './components/WeatherDetails';
import { Container } from 'react-bootstrap';
import NotFound from './components/NotFound';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    try {
      const apiKey = '97ab1f2ca067001a39f0a1f84a73ce34';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        alert('City not found');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar onSearch={fetchWeatherData} />
        <div className="main-content">
          <Container> 
            <Routes>
              <Route path="/" element={<HomePage onCityClick={fetchWeatherData} />} />
              <Route
                path="/weather"
                element={
                  <>
                    <WeatherDisplay weatherData={weatherData} />
                    <WeatherDetails weatherData={weatherData} />
                  </>
                }
              />
              <Route path="/contact" element={<ContactPage />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;




