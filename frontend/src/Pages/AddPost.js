import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddPostPage = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const addPost = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("image", event.target.imagefile.files[0]);

    let token = JSON.parse(localStorage.getItem("authTokens"));

    let response = await fetch("/api/moments/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
      body: formData,
    });

    if (response.status === 200) {
      navigate("/profile");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      addPost(event);
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
