import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation({ activePage, setActivePage }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container>
        <Navbar.Brand
          className={activePage === "home" ? "active" : ""}
          onClick={() => setActivePage("home")}
          style={{ cursor: "pointer" }}
        >
          Crypto Coins
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link
              className={activePage === "about" ? "active" : ""}
              onClick={() => setActivePage("about")}
              style={{ cursor: "pointer" }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
