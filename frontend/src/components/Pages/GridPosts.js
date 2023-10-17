import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.js";

const GridPosts = (props) => {
  return (
    <>
      <Row md={2} lg={3}>
        {props.children.map((pst) => (
          <Col className="p-0">{pst}</Col>
        ))}
      </Row>
    </>
  );
};

export default GridPosts;
