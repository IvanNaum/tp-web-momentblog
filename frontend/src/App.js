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

import EditEmailModal from "./Pages/Profile/EditEmailModal.js";
import EditNickModal from "./Pages/Profile/EditNickModal.js";
import EditPhotoModal from "./Pages/Profile/EditPhotoModal.js";

import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="singup" element={<RegistrationPage />} />

          <Route path="profile">
            <Route index element={<Profile />} />
            <Route path="edit_email" element={<EditEmailModal />} />
            <Route path="edit_nickname" element={<EditNickModal />} />
            <Route path="edit_photo" element={<EditPhotoModal />} />
          </Route>

          <Route path="post/:id" element={<DetailPostPage />} />

          <Route path="search" element={<SearchPage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="add_moment" element={<AddPostPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      {background && (
        <Routes>
          <Route path="profile">
            <Route path="edit_email" element={<EditEmailModal />} />
            <Route path="edit_nickname" element={<EditNickModal />} />
            <Route path="edit_photo" element={<EditPhotoModal />} />
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
