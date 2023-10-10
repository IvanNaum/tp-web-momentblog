// import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";

function App() {
  return (
    <>
      <Header />
      <Button>Test text</Button>
      <Footer />
    </>
  );
}

export default App;
