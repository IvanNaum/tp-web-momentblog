import { Button, Col, Row } from "react-bootstrap";
import SetttinsSVG from "./img/SettingsSVG.jsx";
import GridPosts from "../GridPosts.js";
import Post from "../Post.js";
import POSTS from "../test_posts.js"

const Profile = () => {
  const user_data = {
    username: "ivan_naum",
    img_url: "https://random.imagecdn.app/400/400",
    name: "Ivan Naumov",
    description: "Это тестовое описание профиля",
    posts: 24,
    following: 174,
    follows: 534,
  };

  return (
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
            <div style={{ width: "2rem", height: "2rem" }} className="ms-3">
              <SetttinsSVG />
            </div>
          </div>
          <div className="my-2">
            <Button className="border w-100" variant="light" size="sm">
              Редактировать профиль
            </Button>{" "}
          </div>
          <div className="mt-2">
            <h6>{user_data.name}</h6>
            <span>{user_data.description}</span>
          </div>
        </Col>
      </Row>

      <Row className="my-3 pb-2 text-center border-bottom">
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
          <Post img_url={pst.img_url} username={pst.username} text={pst.text} />
        ))}
      </GridPosts>
    </div>
  );
};

export default Profile;
