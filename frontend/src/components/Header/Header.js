import { Navbar, Container } from "react-bootstrap";
import UserManager from "./UserManager.js";
import BrowseSVG from "./img/browse.jsx";
import NotificationSVG from "./img/notification.jsx";

const Header = () => {
  //TODO => Sticky Header

  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container className="w-50">
          <Navbar.Brand href="#home">Momentblog</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <a
              style={{ height: "25px" }}
              className="mx-2 text-dark d-flex"
              href="/search"
            >
              <BrowseSVG />
            </a>

            <a
              style={{ height: "25px" }}
              className="mx-2 text-dark d-flex"
              href="/notification"
            >
              <NotificationSVG />
            </a>
            <UserManager className="ms-2" />
            {/* <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
