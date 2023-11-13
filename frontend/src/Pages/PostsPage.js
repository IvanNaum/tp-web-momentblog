import { useEffect, useState } from "react";
import GridPosts from "../components/GridPosts.js";
import Post from "../components/Post.js";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoments = async () => {
      const res = fetch(`/api/moments?page=${page}`).then((res) => res.json());
      const json = await res;
      setPosts((posts) => [...posts, ...json.results]);
      setTotalCount(json.count);
      setPage((page) => page + 1);
      setLoading(false);
    };

    if (
      loading &&
      ((posts.length == 0 && totalCount === 0) || posts.length < totalCount)
    ) {
      fetchMoments();
    }
  }, [loading]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return function () {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [totalCount]);

  const scrollHandler = (e) => {
    const scroll_h = e.target.documentElement.scrollHeight;
    const scroll_t = e.target.documentElement.scrollTop;
    const inner_h = window.innerHeight;

    if (scroll_h - (scroll_t + inner_h) < 250) {
      setLoading(true);
    }
  };

  return (
    <>
      <h2 className="text-center">Посты</h2>
      {posts.length > 0 ? (
        <GridPosts>
          {posts.map((pst) => (
            <Post
              id={pst.id}
              img_url={pst.image}
              username={pst.username}
              title={pst.title}
            />
          ))}
        </GridPosts>
      ) : (
        <h5 className="text-center">Пока нет постов</h5>
      )}
    </>
  );
};

export default PostsPage;
