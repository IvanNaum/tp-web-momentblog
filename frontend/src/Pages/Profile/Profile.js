import { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import GridPosts from "../../components/GridPosts.js";
import SquarePost from "../../components/SquarePost.js";
import SettingsModal from "./SettingsModal.js";

const Profile = () => {
  const [show_settings_modal, setShowSettingsModal] = useState(false);

  const handleCloseSettingsModal = () => setShowSettingsModal(false);
  const handleShowSettingsModal = () => setShowSettingsModal(true);

  const id = 2;
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({});
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = fetch(`/api/profiles/${id}`).then((res) => res.json());
      const json = await res;
      setProfile(() => json);
    };
    return () => {
      fetchProfile();
    };
  }, []);

  useEffect(() => {
    const fetchMoments = async () => {
      setLoading(true);
      const res = fetch(`/api/profiles/${id}/moments?page=${page}`).then(
        (res) => res.json()
      );
      const json = await res;
      setPosts((posts) => [...posts, ...json.results]);
      setTotalCount(json.count);
      setPage((page) => page + 1);

      setLoading(false);
    };

    console.log("trigger effect");
    console.log(posts.length, totalCount, loading);

    return () => {
      if (
        loading &&
        ((posts.length == 0 && totalCount === 0) || posts.length < totalCount)
      ) {
        // setLoading(false);
        fetchMoments();
      }
    };
  }, [loading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [totalCount]);

  const scrollHandler = (e) => {
    const scroll_h = e.target.documentElement.scrollHeight;
    const scroll_t = e.target.documentElement.scrollTop;
    const inner_h = window.innerHeight;

    if (scroll_h - (scroll_t + inner_h) < 1000) {
      console.log("trigger");
      setLoading(true);
    }
  };

  return (
    <>
      <div className="mt-2">
        <Row className="align-items-start justify-content-start">
          <Col className="col-4">
            <img
              className="rounded-circle w-100"
              src={profile.photo}
              alt="Фотография"
            />
          </Col>
          <Col className="col-5  mt-3">
            <div className="d-flex fs-2">
              <div className="">@{profile.username}</div>
            </div>
            <div className="my-2">
              <Button
                onClick={handleShowSettingsModal}
                className="border w-100"
                variant="light"
                size="sm"
              >
                Редактировать профиль
              </Button>
            </div>
            <div className="mt-2">
              <h6>{profile.name}</h6>
              <span>{profile.description}</span>
            </div>
          </Col>
        </Row>

        <Row className="mt-3 mb-1 pb-2 text-center border-bottom">
          <Col>
            <h5 className="mb-0">{profile.posts}</h5>
            posts
          </Col>
          <Col>
            <h5 className="mb-0">{profile.following}</h5>
            following
          </Col>
          <Col>
            <h5 className="mb-0">{profile.follows}</h5>
            follows
          </Col>
        </Row>

        <GridPosts>
          {posts.map((pst) => (
            <SquarePost id={pst.id} img_url={pst.image} />
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
