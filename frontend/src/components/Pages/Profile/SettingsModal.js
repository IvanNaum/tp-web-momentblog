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
    </Modal>
  );
};

export default SettingsModal;
