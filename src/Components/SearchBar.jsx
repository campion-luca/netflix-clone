// DA METTERE SEPARATA IN VISTA DI UN FUTURO RITOCCO CON DINAMICHE
import { Container, Row, Col, NavDropdown } from "react-bootstrap";

const SearchBar = () => (
  <Container fluid className="bg-dark pt-3">
    <Row>
      <Col md={4}>
        <h2 className="text-light">TV Shows</h2>
      </Col>

      <Col md={4}>
        <NavDropdown
          title="Genres"
          id="basic-nav-dropdown"
          className="border border-light text-light"
        >
          <NavDropdown.Item href="#action/3.1">Thriller</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Adventure</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Fantasy</NavDropdown.Item>
        </NavDropdown>
      </Col>

      <Col md={4}>
        <h3 className="text-light">::</h3>
      </Col>
    </Row>
  </Container>
);

export default SearchBar;
