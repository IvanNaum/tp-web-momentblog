// import logo from "./logo.svg";
// import './App.css';
import Footer from "./components/Footer.js";
import Header from "./components/Header/Header.js";

import PostsPage from "./components/Pages/Posts/PostsPage.js";
import Profile from "./components/Pages/Profile/Profile.js";
import LoginPage from "./components/Pages/Login/LoginPage.js";
import RegistrationPage from "./components/Pages/Login/RegistrationPage.js";
import AddPostPage from "./components/Pages/AddPost.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="w-50">
        {/* <PostsPage /> */}
        {/* <LoginPage /> */}
        {/* <RegistrationPage /> */}
        {/* <Profile /> */}
        <AddPostPage/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
