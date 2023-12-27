import LikeBlock from "../components/LikeBlock.js";

const Comment = (props) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="mb-2">
        <h6 className="mb-1">@{props.nickname}</h6>
        <p className="m-0">{props.text}</p>
      </div>
      <LikeBlock
        min_likes
        likes={props.likes}
        id={props.id}
        triggerURL={`/api/comments/${props.id}/like`}
      />
    </div>
  );
};

export default Comment;
