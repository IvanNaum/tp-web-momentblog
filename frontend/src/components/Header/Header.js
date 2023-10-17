import { Container, Navbar } from "react-bootstrap";
import UserManager from "./UserManager.js";
import BrowseSVG from "./img/browse.jsx";


const Header = () => {
  //TODO => Sticky Header

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary sticky-top">
        <Container className="w-50">
          <Navbar.Brand href="/">Momentblog</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <a
              style={{ height: "25px" }}
              className="mx-2 text-dark d-flex"
              href="/search"
            >
              <BrowseSVG />
            </a>

            <UserManager className="ms-1" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
