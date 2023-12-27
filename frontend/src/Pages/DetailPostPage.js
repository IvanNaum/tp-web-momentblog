import { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Comment from "../components/CommentBlock.js";
import LikeBlock from "../components/LikeBlock.js";
import PostDescription from "../components/PostDescription.js";

const DetailPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
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
    const fetchComments = async () => {
      const res = fetch(`/api/moments/${id}/comments`).then((res) =>
        res.json()
      );
      const json = await res;
      setComments(json.results);
    };

    fetchMoment();
    fetchComments();
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

          {loaded && (
            <LikeBlock
              likes={postLikes}
              id={id}
              triggerURL={`/api/moments/${id}/like`}
            />
          )}

          <hr className="my-3" />
          <div className="">
            <InputGroup className="mb-3" size="sm">
              <Form.Control size="sm" placeholder="Введите комментарий..." />
              <Button type="submit" variant="outline-secondary" id="search-btn">
                Добавить
              </Button>
            </InputGroup>
            <div className="overflow-auto" style={{ height: "300px" }}>
              {comments.map((cmt) => (
                <div className="me-2">
                  <Comment
                    nickname={cmt.username}
                    text={cmt.text}
                    likes={cmt.likes}
                    id={cmt.id}
                  />
                  <hr className="my-1" />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailPostPage;
