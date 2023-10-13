import { Container, Row, Col } from "react-bootstrap";
import Post from "../Post.js";
import GridPosts from "../GridPosts.js";
import POSTS from "../test_posts.js"

const PostsPage = () => {
  return (
    <>
      <h2 className="text-center">Посты</h2>
      <GridPosts>
        {POSTS.map((pst) => (
          <Post img_url={pst.img_url} username={pst.username} text={pst.text} />
        ))}
      </GridPosts>
    </>
  );
};

export default PostsPage;
