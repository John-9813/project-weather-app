
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
  const [weatherData, setWeatherData] = useState(null); // definisco lo stato per i dati meteo

  // funzione asincrona per recuperare i dati meteo
  const fetchWeatherData = async (city) => {
    try {
      const apiKey = '97ab1f2ca067001a39f0a1f84a73ce34';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}` // mi sembrava più ordinato aggiungere la key in questo modo
      );
      if (response.ok) {
        const data = await response.json(); // converto la risposta in formato JSON
        setWeatherData(data); // aggiorno lo stato con i dati meteo
      } else {
        alert('City not found'); // mostra un alert se la città non viene trovata
      }
    } catch (error) {
      console.error('Error fetching weather data:', error); // log di eventuali errori
    }
  };

  return (
    <BrowserRouter>  {/* browserRouter che contiene tutto come ci ha consigliato per non sbagliare*/}
      <div className="App">
        <Navbar onSearch={fetchWeatherData} /> {/* navbar con la funzione di ricerca */}
        <div className="main-content">
          <Container> 
            <Routes> {/* aggiunta dei vari percorsi */}
              <Route path="/" element={<HomePage onCityClick={fetchWeatherData} />} /> 
              <Route
                path="/weather"
                element={
                  <>
                    <WeatherDisplay weatherData={weatherData} /> {/* visualizza i dati meteo */}
                    <WeatherDetails weatherData={weatherData} /> {/* visualizza i dettagli meteo */}
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

// l'aggiunta dei commenti la ho fatta per dimostrare sia a lei che a me stesso che sò cosa ho utilizzato e per ripasso personale,
// da ora in avanti cercherò di fare sempre così.
// il fatto che continuo comunque a ricercare online anche soluzioni che non conosco appieno è un'insegnamento che ci fece il primo insegnante Dario Del Giudice,
// che reputo abbastanza giusta visto che la mole di conoscenze da applicare è molto grande, spero non sia un problema troppo grave, in caso mi faccia sapere.




