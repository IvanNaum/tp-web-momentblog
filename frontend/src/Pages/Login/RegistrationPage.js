import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
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
      <h2>Регистрация</h2>
      <Form
        className="w-75"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите email..." required />
          <Form.Control.Feedback type="invalid">
            Введите корректный email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="nickname">
          <Form.Label>Nickname</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control
              placeholder="Введите nickname..."
              aria-describedby="nickname"
              required
            />
            <Form.Control.Feedback type="invalid">
              Введите корректный nickname
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-2" controlId="imagefile">
          <Form.Label>Фотография</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Добавьте фотографию..."
            aria-describedby="imagefile"
            required
          />
          <Form.Control.Feedback type="invalid">
            Добавьте корректную фотографию
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password1">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите пароль..."
            aria-describedby="password1"
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный пароль
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password2">
          <Form.Label>Пароль ещё раз</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите пароль ещё раз..."
            aria-describedby="password2"
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный пароль
          </Form.Control.Feedback>
        </Form.Group>

        <div className="w-100 my-3">
          <Button className="d-block mx-auto" variant="primary" type="submit">
            Зарегистрироваться
          </Button>
        </div>
      </Form>
      <Link to="/login">Уже есть аккаунт?</Link>
    </Container>
  );
};

export default RegistrationPage;
