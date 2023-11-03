import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SettingsModalForm from "../../components/SettingsModalForm.js";

const EditNickModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить nickname</Modal.Header>
      <SettingsModalForm>
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
      </SettingsModalForm>
    </Modal>
  );
};

export default EditNickModal;
