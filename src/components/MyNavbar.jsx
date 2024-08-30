import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar = ({ onSearch }) => {
  const navigate = useNavigate(); // Hook per la navigazione

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value.trim(); // Prendi il valore della città dal campo di input
    if (city) {
      onSearch(city); // Esegui la funzione di ricerca
      navigate('/weather'); // Naviga alla pagina del meteo
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img src="/logo-meteo.png" alt="Logo" className="logo" /> {/* Aggiornato */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/weather" className="nav-link">
              Weather
            </Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search City"
              className="me-2"
              aria-label="Search"
              name="city"
            />
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

