import NotificationSVG from "./img/notification.jsx";
import ProfileSVG from "./img/profile.jsx";
import PlusSVG from "./img/plus.jsx";

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
        <a
          style={{ height: "25px" }}
          className="mx-2 text-dark d-flex"
          href="/profile"
        >
          <ProfileSVG />
        </a>
      </div>
    );
  }

  return (
    <div class={props.className}>
      {/* If user is not logged in */}
      <a href="/login">Войти</a>
      {/* else */}
    </div>
  );
};

export default UserManager;
