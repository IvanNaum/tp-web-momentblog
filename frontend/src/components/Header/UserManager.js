import React, { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import NotificationSVG from "../img/notification.jsx";
import PlusSVG from "../img/plus.jsx";
import ProfileSVG from "../img/profile.jsx";

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
  let { user, logoutUser } = useContext(AuthContext);

  if (user) {
    let classes = props.className + " d-flex";
    return (
      <div className={classes}>
        <Link to="/notification">
          <div style={{ height: "25px" }} className="mx-2 text-dark d-flex">
            <NotificationSVG />
          </div>
        </Link>
        <Link to="/add_moment">
          <div style={{ height: "25px" }} className="mx-2 text-dark d-flex">
            <PlusSVG />
          </div>
        </Link>

        <Dropdown drop="down">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <div style={{ height: "25px" }} className="mx-2 text-dark d-flex">
              <ProfileSVG />
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/profile">
              Профиль
            </Dropdown.Item>

            <Dropdown.Item
              onClick={(e) => {
                e.preventDefault();
                logoutUser();
              }}
            >
              Выйти
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  /* If user is not logged in */
  return (
    <div className={props.className}>
      <div className="d-flex">
        <div className="me-2">
          <Link to="/login">Войти</Link>
        </div>
        <div className="">
          <Link to="/signup">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default UserManager;
