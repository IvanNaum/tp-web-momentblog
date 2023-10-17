import Footer from "./components/Footer.js";
import Header from "./components/Header/Header.js";

import AddPostPage from "./components/Pages/AddPost.js";
import LoginPage from "./components/Pages/Login/LoginPage.js";
import RegistrationPage from "./components/Pages/Login/RegistrationPage.js";
import NotFoundPage from "./components/Pages/NotFoundPage.js";
import NotificationPage from "./components/Pages/NotificationPage.js";
import PostsPage from "./components/Pages/Posts/PostsPage.js";
import Profile from "./components/Pages/Profile/Profile.js";
import SearchPage from "./components/Pages/SearchPage.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="w-50">
        <Routes>
          <Route path="/" element={<PostsPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/singup" element={<RegistrationPage />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/search" element={<SearchPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/add_moment" element={<AddPostPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
