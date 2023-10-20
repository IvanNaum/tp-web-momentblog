import { ListGroup, Modal } from "react-bootstrap";

const SettingsModal = (props) => {
  const show = props.show;
  const handleClose = props.handleClose;
  const handleShow = props.handleShow;

  return (
    <Modal show={show} onHide={handleClose}>
      <ListGroup>
        <ListGroup.Item>
          <a href="edit_email">Изменить email</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="edit_nickname">Изменить nickname</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="edit_photo">Изменить фотографию</a>
        </ListGroup.Item>
      </ListGroup>

      {/* <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default SettingsModal;
