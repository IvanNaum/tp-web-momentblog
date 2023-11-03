import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const LoginPage = () => {
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
      <h2>Авторизация</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-75"
      >
        <Form.Group className="mb-2" controlId="email_nickname">
          <Form.Label>Email или nickname</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введите email или nickname..."
            aria-describedby="email_nickname"
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный email или nickname
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="password">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите пароль..."
            aria-describedby="password"
            required
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный пароль
          </Form.Control.Feedback>
        </Form.Group>
        <div className="w-100 my-3">
          <Button
            className="d-block mx-auto w-25"
            variant="primary"
            type="submit"
          >
            Войти
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
