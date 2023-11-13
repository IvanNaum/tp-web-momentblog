import { useEffect, useState, useParams } from "react";
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

  const [likes, setLikes] = useState(props.likes || 0);
  // console.log(likes);
  const [min_likes, setMinLikes] = useState(props.min_likes || false);
  const [clicked_like, setClickedLike] = useState(false);

  useEffect(() => {
    setLikes((likes) => props.likes);
  }, []);

  const toggleLike = (event) => {
    setClickedLike(!clicked_like);
    clicked_like ? setLikes(likes - 1) : setLikes(likes + 1);
  };

  return (
    <div className={"my-2 d-flex text-center " + (min_likes && "flex-column")}>
      <div onClick={toggleLike} style={{ height: "25px" }} className="d-flex">
        <LikeSVG clicked={clicked_like} />
      </div>
      <div
        className={min_likes ? "text-center" : "ms-2 d-flex align-items-center"}
        style={{ fontSize: "13px" }}
      >
        {likes} {!min_likes && getLikeWord(likes)}
      </div>
    </div>
  );
};

export default LikeBlock;
