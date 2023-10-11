// import logo from "./logo.svg";
// import './App.css';
import Footer from "./components/Footer.js";
import Header from "./components/Header/Header.js";
import GridPosts from "./components/Pages/Posts/GridPosts.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";

function App() {
  return (
    <div class="app">
      <Header />
      <Container className="w-50">
        <GridPosts />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
