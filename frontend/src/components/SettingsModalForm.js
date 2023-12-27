import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const SettingsModalForm = (props) => {
  const [validated, setValidated] = useState(false);

  const editField = async (event) => {
    event.preventDefault();

    let token = JSON.parse(localStorage.getItem("authTokens"));

    let response = await fetch("/api/moments/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
      body: JSON.stringify({
        old_email: event.target.old.value,
        new_email: event.target.new_email.value,
      }),
    });

    if (response.status === 200) {
      navigate("/profile");
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="d-flex justify-content-center">
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="w-75"
      >
        {props.children}
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
  );
};

export default SettingsModalForm;
