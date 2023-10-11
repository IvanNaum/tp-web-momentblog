const UserManager = (props) => {
  return (
    <div class={props.className}>
      {/* If user is not logged in */}
      <a href="/login">Войти</a>
      {/* else */}
    </div>
  );
};

export default UserManager;
