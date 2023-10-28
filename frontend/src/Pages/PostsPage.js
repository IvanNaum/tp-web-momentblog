import GridPosts from "../components/GridPosts.js";
import Post from "../components/Post.js";
import POSTS from "./test_posts.js";

const PostsPage = () => {
  return (
    <>
      <h2 className="text-center">Посты</h2>
      <GridPosts>
        {POSTS.map((pst) => (
          <Post
            id={pst.id}
            img_url={pst.img_url}
            username={pst.username}
            text={pst.text}
          />
        ))}
      </GridPosts>
    </>
  );
};

export default PostsPage;
