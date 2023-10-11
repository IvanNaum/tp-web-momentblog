import { Navbar, Container } from "react-bootstrap";
import UserManager from "./UserManager.js";

const Header = () => {
  return (
    <>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container className="w-50">
          <Navbar.Brand href="#home">Momentblog</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <a className="mx-2" href="/search">
              *Поиск*
            </a>
            <a className="mx-2" href="/notification">
              *Уведомления*
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
