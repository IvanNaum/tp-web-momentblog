import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import AuthContext from "../../context/AuthContext";

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  const [validated, setValidated] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      loginUser(event);
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h2>Авторизация</h2>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleLoginSubmit}
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
      <Link to="/signup">Ещё нет аккаунта?</Link>
    </Container>
  );
};

export default LoginPage;
