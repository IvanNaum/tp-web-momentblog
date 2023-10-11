// import logo from "./logo.svg";
// import './App.css';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div class="app">
      <Header />
      <Container className="w-50">
        <h1 className="text-center">Посты</h1>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
