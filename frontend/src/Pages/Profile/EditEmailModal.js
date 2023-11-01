import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditEmailModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>
        <Modal.Title>Изменить email </Modal.Title>
      </Modal.Header>
      EditEmailModal!!!
    </Modal>
  );
};

export default EditEmailModal;
