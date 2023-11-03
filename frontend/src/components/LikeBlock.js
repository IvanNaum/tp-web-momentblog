import { useState } from "react";
import LikeSVG from "./img/LikeSVG.jsx";

const getLikeWord = (likes) => {
  if ((10 <= likes && likes <= 20) || likes % 10 > 4 || likes % 10 === 0) {
    return "лайков";
  } else if (likes % 10 === 1) {
    return "лайк";
  } else {
    return "лайка";
  }
};

const LikeBlock = (props) => {
  // TODO обрабатывать лайки с добавлением постфикса (11к, 432к)
  const min_likes = props.min_likes || false;
  const [likes, setLikes] = useState(props.likes || 0);
  const [clicked_like, setClickedLike] = useState(false);
  const toggleLike = (event) => {
    setClickedLike(!clicked_like);
    clicked_like ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  let like_word = getLikeWord(likes);

  return (
    <div className={"my-2 d-flex text-center " + (min_likes && "flex-column")}>
      <div onClick={toggleLike} style={{ height: "25px" }} className="d-flex">
        <LikeSVG clicked={clicked_like} />
      </div>
      <div
        className={min_likes ? "text-center" : "ms-2"}
        style={{ fontSize: "13px" }}
      >
        {likes} {!min_likes && like_word}
      </div>
    </div>
  );
};

export default LikeBlock;
