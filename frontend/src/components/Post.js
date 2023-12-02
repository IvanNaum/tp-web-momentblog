import { Card } from "react-bootstrap";
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
        <Card.Title className="text-truncate">@{props.username}</Card.Title>
        <Card.Text className="text-truncate">{props.title}</Card.Text>
        <Link
          to={`/post/${props.id}`}
          className="d-block w-100 text-center btn btn-primary"
        >
          Подробнее
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Post;
