import { useContext, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const EditNickModal = (props) => {
  let { updateToken } = useContext(AuthContext);

  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      editNickname(event);
    }

    setValidated(true);
  };

  const editNickname = async (event) => {
    event.preventDefault();

    let token = JSON.parse(localStorage.getItem("authTokens"));
    console.log(event);
    let response = await fetch("/api/user/edit_nickname", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        new_username: event.target.form.new_nickname.value,
      }),
    });

    if (response.status === 200) {
      navigate("/profile");
      updateToken();
    }
  };

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить nickname</Modal.Header>
      <Container className="d-flex justify-content-center">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-75"
        >
          <Form.Group className="mb-2" controlId="new_nickname">
            <Form.Label>Новый nickname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Введите nickname..."
              required
            />
            <Form.Control.Feedback type="invalid">
              Введите корректный nickname
            </Form.Control.Feedback>
          </Form.Group>
          <div className="w-auto my-3">
            <Button
              className="d-block mx-auto"
              variant="primary"
              onClick={handleSubmit}
            >
              Изменить
            </Button>
          </div>
        </Form>
      </Container>
    </Modal>
  );
};

export default EditNickModal;
