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
  const likes = props.likes || 0;
  const [clicked_like, setClickedLike] = useState(false);
  const toggleLike = (event) => {
    setClickedLike(!clicked_like);
  };

  let like_word = getLikeWord(likes);

  return (
    <div className="my-2 d-flex">
      <div
        onClick={toggleLike}
        style={{ height: "25px" }}
        className="d-flex me-2"
      >
        <LikeSVG clicked={clicked_like} />
      </div>
      {likes} {like_word}
    </div>
  );
};

export default LikeBlock;
