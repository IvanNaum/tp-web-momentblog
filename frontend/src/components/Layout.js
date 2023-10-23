import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.js";
import Header from "./Header/Header.js";

const Layout = () => {
  return (
    <>
      <Header />

      <Container className="w-50">
        <Outlet />
      </Container>

      <Footer />
    </>
  );
};

export default Layout;
