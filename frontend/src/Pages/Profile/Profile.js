import { Button, Col, Row } from "react-bootstrap";
import GridPosts from "../../components/GridPosts.js";
import SquarePost from "../../components/SquarePost.js";
import POSTS from "../test_posts.js";
import SettingsModal from "./SettingsModal.js";
import SetttinsSVG from "../../components/img/SettingsSVG.jsx";
import { useState } from "react";
const Profile = () => {
  const [show_settings_modal, setShowSettingsModal] = useState(false);

  const handleCloseSettingsModal = () => setShowSettingsModal(false);
  const handleShowSettingsModal = () => setShowSettingsModal(true);

  const user_data = {
    username: "ivan_naum",
    img_url: "https://random.imagecdn.app/400/400",
    name: "Ivan Naumov",
    description: "Это тестовое описание профиля",
    posts: POSTS.length,
    following: 174,
    follows: 534,
  };

  return (
    <>
      <div className="mt-2">
        <Row className="align-items-start justify-content-start">
          <Col className="col-4">
            <img
              className="rounded-circle w-100"
              src={user_data.img_url}
              alt="Фотография"
            />
          </Col>
          <Col className="col-5  mt-3">
            <div className="d-flex fs-2">
              <div className="">@{user_data.username}</div>
              <a
                href="/settings"
                style={{ width: "2rem", height: "2rem", cursor: "pointer" }}
                className="text-dark ms-3"
              >
                <SetttinsSVG />
              </a>
            </div>
            <div className="my-2">
              <Button
                onClick={handleShowSettingsModal}
                className="border w-100"
                variant="light"
                size="sm"
              >
                Редактировать профиль
              </Button>{" "}
            </div>
            <div className="mt-2">
              <h6>{user_data.name}</h6>
              <span>{user_data.description}</span>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 mb-1 pb-2 text-center border-bottom">
          <Col>
            <h5 className="mb-0">{user_data.posts}</h5>
            posts
          </Col>
          <Col>
            <h5 className="mb-0">{user_data.following}</h5>
            following
          </Col>
          <Col>
            <h5 className="mb-0">{user_data.follows}</h5>
            follows
          </Col>
        </Row>

        <GridPosts>
          {POSTS.map((pst) => (
            <SquarePost
              id={pst.id}
              img_url={pst.img_url}
              username={pst.username}
              text={pst.text}
            />
          ))}
        </GridPosts>
      </div>
      <SettingsModal
        show={show_settings_modal}
        handleClose={handleCloseSettingsModal}
        handleShow={handleShowSettingsModal}
      />
    </>
  );
};

export default Profile;
