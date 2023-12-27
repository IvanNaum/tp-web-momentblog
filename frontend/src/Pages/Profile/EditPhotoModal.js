import { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditPhotoModal = (props) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      setValidated(true);
      editPhoto(event);
    }

    setValidated(true);
  };

  const editPhoto = async (event) => {
    event.preventDefault();

    console.log(event);
    const formData = new FormData();
    formData.append("new_photo", event.target.form.new_photo.files[0]);

    let token = JSON.parse(localStorage.getItem("authTokens"));

    let response = await fetch("/api/user/edit_photo", {
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
  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить фотографию</Modal.Header>
      <Container className="d-flex justify-content-center">
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          className="w-75"
        >
          <Form.Group className="mb-2" controlId="new_photo">
            <Form.Label>Новый Photo</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              placeholder="Добавьте фотографию..."
              required
            />
            <Form.Control.Feedback type="invalid">
              Добавьте фотографию
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

export default EditPhotoModal;
