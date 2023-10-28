const Comment = (props) => {
  return (
    <div className="mb-2">
      <h6 className="mb-1">@{props.nickname}</h6>
      <p className="m-0">{props.text}</p>
    </div>
  );
};

export default Comment;
