import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SettingsModalForm from "../../components/SettingsModalForm.js";

const EditEmailModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить email</Modal.Header>
      <SettingsModalForm>
        <Form.Group className="mb-2" controlId="old_email">
          <Form.Label>Старый email</Form.Label>
          <Form.Control type="text" placeholder="Введите email..." required />
          <Form.Control.Feedback type="invalid">
            Введите корректный email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" controlId="new_email">
          <Form.Label>Новый email</Form.Label>
          <Form.Control type="text" placeholder="Введите email..." required />
          <Form.Control.Feedback type="invalid">
            Введите корректный email
          </Form.Control.Feedback>
        </Form.Group>
      </SettingsModalForm>
    </Modal>
  );
};

export default EditEmailModal;
