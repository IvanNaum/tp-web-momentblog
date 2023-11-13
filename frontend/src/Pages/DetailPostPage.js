import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/CommentBlock.js";
import LikeBlock from "../components/LikeBlock.js";
import PostDescription from "../components/PostDescription.js";

const DetailPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [postLikes, setPostLikes] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchMoment = async () => {
      const res = fetch(`/api/moments/${id}`).then((res) => res.json());
      const json = await res;
      setPost(json);
      setPostLikes(json.likes);
      setLoaded(true);
    };

    fetchMoment();
  }, []);

  return (
    <div className="my-3 h-100">
      <Row>
        <Col className="w-50">
          <img
            alt="Фотография"
            src={post.image}
            style={{ height: "400px" }}
            className="object-fit-cover rounded w-100"
          />
        </Col>
        <Col>
          <h5 className="my-2">@{post.username}</h5>
          <h4>{post.title}</h4>
          <PostDescription text={String(post.description)} />

          {/* <LikeBlock likes={5} /> */}
          {loaded && <LikeBlock likes={postLikes} />}

          <hr className="my-3" />
          <div className="">
            <InputGroup className="mb-3" size="sm">
              <Form.Control size="sm" placeholder="Введите комментарий..." />
              <Button type="submit" variant="outline-secondary" id="search-btn">
                Добавить
              </Button>
            </InputGroup>
            <div>
              <Comment nickname="ivan_naum" text="Тестовый текст комментария" />
              <Comment nickname="__asd__" text="текст коментария 2" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailPostPage;
