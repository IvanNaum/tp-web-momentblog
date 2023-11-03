import { Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SettingsModalForm from "../../components/SettingsModalForm.js";

const EditPhotoModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить фотографию</Modal.Header>
      <SettingsModalForm>
        <Form.Group className="mb-2" controlId="new_imagefile">
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
      </SettingsModalForm>
    </Modal>
  );
};

export default EditPhotoModal;
