import React from "react";
import { Dropdown } from "react-bootstrap";
import NotificationSVG from "./img/notification.jsx";
import PlusSVG from "./img/plus.jsx";
import ProfileSVG from "./img/profile.jsx";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const UserManager = (props) => {
  let is_auntification = true;

  if (is_auntification) {
    let classes = props.className + " d-flex";
    return (
      <div className={classes}>
        <a
          style={{ height: "25px" }}
          className="mx-2 text-dark d-flex"
          href="/notification"
        >
          <NotificationSVG />
        </a>
        <a
          style={{ height: "25px" }}
          className="mx-2 text-dark d-flex"
          href="/add_moment"
        >
          <PlusSVG />
        </a>

        <Dropdown drop="down">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <div style={{ height: "25px" }} className="mx-2 text-dark d-flex">
              <ProfileSVG />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/profile">Профиль</Dropdown.Item>
            <Dropdown.Item href="/logout">Выйти</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  return (
    <div className={props.className}>
      {/* If user is not logged in */}
      <a href="/login">Войти</a>
      {/* else */}
    </div>
  );
};

export default UserManager;
