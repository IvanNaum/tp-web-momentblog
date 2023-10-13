import { Container, Form, Button, InputGroup } from "react-bootstrap";

const RegistrationPage = () => {
  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h3>Регистрация</h3>
      <Form className="w-75">
        <Form.Group className="mb-2" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Введите email..." />
        </Form.Group>

        <Form.Group className="mb-2" controlId="nickname">
          <Form.Label>Nickname</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control placeholder="Введите nickname..." />
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-2" controlId="imagefile">
          <Form.Label>Фотография</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            placeholder="Добавьте фотографию..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password1">
          <Form.Label>Пароль</Form.Label>
          <Form.Control type="password" placeholder="Введите пароль..." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password2">
          <Form.Label>Пароль ещё раз</Form.Label>
          <Form.Control
            type="password"
            placeholder="Введите пароль ещё раз..."
          />
        </Form.Group>
        <div className="w-100">
          <Button
            className="d-block mx-auto w-25"
            variant="primary"
            type="submit"
          >
            Зарегистрироваться 
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegistrationPage;
