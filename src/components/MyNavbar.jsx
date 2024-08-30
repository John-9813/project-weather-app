import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const CustomNavbar = ({ onSearch }) => {
  const navigate = useNavigate(); // hook per la navigazione

  const handleSearch = (e) => {
    e.preventDefault(); // previene il comportamento predefinito del form

    const city = e.target.elements.city.value.trim(); // controlla se il campo città non è vuoto, trim() è un metodo delle stringhe che aiuta il codice a capire
    // se il campo di ricerca è vuoto o ha alcuni spazi vuoti, ho dovuto ricercare questo metodo online perchè avevo errori con alcuni nomi di città tipo "new york"

    if (city) {
      onSearch(city); // esegue la funzione di ricerca
      navigate('/weather'); // naviga alla pagina del meteo
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="w-100 ">
      <Container fluid>

        <Navbar.Brand as={Link} to="/"> {/* tra le mie ricerche ho trovato un metodo che si può usare per "Link", funziona allo stesso modo di quello che ci ha mostrato, quindi li ho usati entrambi*/}

          <img src="/logo-meteo.png" alt="Logo" className="logo" /> {/* logo dell'app che mi son fatto creare al volo da una di quelle ia online perchè.. si*/}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto ">
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
            /> {/* campo di input per la ricerca della città */}

            <Button variant="outline-info" type="submit"> {/* bottone per inviare il form */}
              Search
            </Button>

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

