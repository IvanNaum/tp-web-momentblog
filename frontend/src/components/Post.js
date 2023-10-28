import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = (props) => {
  // TODO
  return (
    <Card bg="light" className="m-2">
      <Card.Img
        style={{ height: "15em" }}
        variant="top"
        src={props.img_url}
        className="object-fit-cover"
      />
      <Card.Body className="p-2">
        <Card.Title className="">@{props.username}</Card.Title>
        <Card.Text className="text-truncate">{props.text}</Card.Text>
        <Link to={`/post/${props.id}`}>
          <Button className="d-block w-100 text-center" variant="primary">
            Подробнее
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Post;