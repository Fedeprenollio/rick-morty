import { NavLink, Link, useNavigate, Outlet } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Search } from "../../components/search/Search";

export function NavBar() {
  let navigate = useNavigate();
  const addClase = (e) => {
    let elemento = document.getElementById(e.target.id);
    elemento.className = "nav-link active";
  };

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand  >React Rick y Morty</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                // onClick={() => navigate("/")}

                as={NavLink}
                to="/characters"
              >
                Todos los personajes
              </Nav.Link>
              <Nav.Link
                // onClick={() => navigate("/episodes")}

                as={NavLink}
                to="/episodes"
              >
                Personajes por episodios
              </Nav.Link>

              <Nav.Link
                // onClick={() => navigate("/location")}

                as={NavLink}
                to="/location"
              >
                Personaje por ubicación
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}
