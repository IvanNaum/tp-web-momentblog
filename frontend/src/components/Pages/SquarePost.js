import { Card, Button } from "react-bootstrap";

const SquarePost = (props) => {
  return (
    <Card bg="light" className="m-1">
      <Card.Img
        style={{ height: "15em" }}
        variant="top"
        src={props.img_url}
        className="object-fit-cover"
      />
    </Card>
  );
};
export default SquarePost;
