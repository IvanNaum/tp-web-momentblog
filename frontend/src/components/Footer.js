import { Container } from "react-bootstrap";

const Footer = () => {

  // TODO => Sticky Footers

  return (
    <>
      <footer class="fixed-bottom bg-body-tertiary p-3">
        <Container className="w-50">
          <h5 className="mb-0">Created by Naumov I. K.</h5>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
