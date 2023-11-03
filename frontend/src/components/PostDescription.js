import { Link } from "react-router-dom";

const PostDescription = (props) => {
  const hashtag_re = new RegExp(`(#[A-Za-zА-Яа-я0-9_]+)`);

  let blocks = props.text.split(hashtag_re);
  let text = blocks.map((block) => {
    if (block.match(hashtag_re)) {
      return <Link to={`/search/${block.substring(1)}`}>{block}</Link>;
    }
    return block;
  });

  return <div>{text}</div>;
};

export default PostDescription;
