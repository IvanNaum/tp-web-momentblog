import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const AddPostPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h2>Добавить момент</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-75"
      >
        <Form.Group className="mb-2" controlId="title">
          <Form.Label>Заголовок</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите заголовок..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный заголовок
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите описание..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректное описание
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="imagefile">
          <Form.Label>Фотография</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Добавьте фотографию..."
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректную фотографию
          </Form.Control.Feedback>
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
