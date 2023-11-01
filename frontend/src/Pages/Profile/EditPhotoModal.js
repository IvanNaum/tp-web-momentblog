import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditPhotoModal = (props) => {
  const navigate = useNavigate();

  return (
    <Modal show={true} onHide={() => navigate(-1)}>
      <Modal.Header closeButton>
        Изменить фотографию
      </Modal.Header>
      EditPhotoModal!!!
    </Modal>
  );
};

export default EditPhotoModal;
