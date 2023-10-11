import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  // TODO
  return (
    <>
      <Card bg="light">
        <Card.Img
          style={{ height: "15em" }}
          variant="top"
          src={props.img_url}
          className="object-fit-cover"
        />
        <Card.Body className="p-2">
          <Card.Title className="">@{props.username}</Card.Title>
          <Card.Text className="text-truncate">{props.text}</Card.Text>
          <Button className="d-block w-100 text-center" variant="primary">
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Post;
