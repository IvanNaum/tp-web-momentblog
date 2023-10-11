import { Container, Form, Button } from "react-bootstrap";

const LoginPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h3>Авторизация</h3>
      <Form className="w-75">
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Email или nickname</Form.Label>
          <Form.Control type="email" placeholder="Введите email.." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль.." />
        </Form.Group>
        <div className="w-100">
          <Button className="d-block mx-auto w-25" variant="primary" type="submit">
            Войти
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default LoginPage;
