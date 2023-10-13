import NotificationSVG from "./img/notification.jsx";

const UserManager = (props) => {
  return (
    <>
      {/* If user is logged in view notification image */}
      {false ? (
        <a
          style={{ height: "25px" }}
          className="mx-2 text-dark d-flex"
          href="/notification"
        >
          <NotificationSVG />
        </a>
      ) : (
        ""
      )}
      <div class={props.className}>
        {/* If user is not logged in */}
        <a href="/login">Войти</a>
        {/* else */}
      </div>
    </>
  );
};

export default UserManager;
