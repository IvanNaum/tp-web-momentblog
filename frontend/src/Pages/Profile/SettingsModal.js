import { ListGroup, Modal } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const SettingsModal = (props) => {
  const show = props.show;
  const handleClose = props.handleClose;

  const setting_menu = [
    { text: "Изменить email", url: "edit_email" },
    { text: "Изменить nickname", url: "edit_nickname" },
    { text: "Изменить фотографию", url: "edit_photo" },
  ];
  const location = useLocation();

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>Настройки</Modal.Header>
        <ListGroup>
          {setting_menu.map((item) => {
            return (
              <ListGroup.Item>
                <Link
                  to={item.url}
                  state={{ background: location }}
                  onClick={handleClose}
                >
                  {item.text}
                </Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Modal>
    </>
  );
};

export default SettingsModal;
