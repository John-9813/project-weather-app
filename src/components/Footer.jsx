// Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

// semplice footer fatto al volo, non sapevo cosa aggiungerci

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-auto py-3 w-100">
      <Container fluid className="text-center">
        <p>&copy; 2024 MyWeatherApp | Created by John Oliveira</p>
      </Container>
    </footer>
  );
};

export default Footer;

