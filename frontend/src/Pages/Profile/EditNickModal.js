import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditNickModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>Изменить email</Modal.Header>
      EditNickModal!!!
    </Modal>
  );
};

export default EditNickModal;
