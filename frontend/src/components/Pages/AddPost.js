import { Container, Form, Button } from "react-bootstrap";

const AddPostPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h3>Добавить момент</h3>
      <Form className="w-75">
        <Form.Group className="mb-2" controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control type="text" placeholder="Введите описание..." />
        </Form.Group>

        <Form.Group className="mb-2" controlId="imagefile">
          <Form.Label>Фотография</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Добавьте фотографию..."
          />
        </Form.Group>

        <div className="w-100 my-3">
          <Button
            className="d-block mx-auto w-25"
            variant="primary"
            type="submit"
          >
            Создать
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddPostPage;
