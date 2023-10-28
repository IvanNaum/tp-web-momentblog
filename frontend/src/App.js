import Layout from "./components/Layout.js";

import LoginPage from "./Pages/Login/LoginPage.js";
import RegistrationPage from "./Pages/Login/RegistrationPage.js";

import AddPostPage from "./Pages/AddPost.js";
import DetailPostPage from "./Pages/DetailPostPage.js";
import NotFoundPage from "./Pages/NotFoundPage.js";
import NotificationPage from "./Pages/NotificationPage.js";
import PostsPage from "./Pages/PostsPage.js";
import Profile from "./Pages/Profile/Profile.js";
import SearchPage from "./Pages/SearchPage.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="singup" element={<RegistrationPage />} />
          <Route path="profile" element={<Profile />} />

          <Route path="post/:id" element={<DetailPostPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="add_moment" element={<AddPostPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
