import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserManager from "./UserManager.js";
import BrowseSVG from "../img/browse.jsx";

const Header = () => {
  //TODO => Sticky Header

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary sticky-top">
        <Container className="w-50">
          <Navbar.Brand>
            <Link className="text-dark text-decoration-none" to="/">
              Momentblog
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/search">
              <div style={{ height: "25px" }} className="mx-2 text-dark d-flex">
                <BrowseSVG />
              </div>
            </Link>

            <UserManager className="ms-1" />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
