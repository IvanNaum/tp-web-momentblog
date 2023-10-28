import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SquarePost = (props) => {
  return (
    <Card bg="light" className="m-1">
      <Link to={`/post/${props.id}`}>
        <Card.Img
          style={{ height: "15em" }}
          variant="top"
          src={props.img_url}
          className="object-fit-cover"
        />
      </Link>
    </Card>
  );
};
export default SquarePost;
