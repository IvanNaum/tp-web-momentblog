import { Container, Row, Col } from "react-bootstrap";
import Post from "./Post.js";

const GridPosts = () => {
  let posts = [
    {
      img_url: "https://random.imagecdn.app/500/150",
      username: "ivan_naum",
      text: "Random image",
    },
    {
      img_url: "https://random.imagecdn.app/300/350",
      username: "vasya",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor, saepe tempora quas laudantium architecto quisquam omnis! Veniam esse sit dolorum, quas repudiandae asperiores dolores officiis tempore iure mollitia laudantium?",
    },
    {
      img_url: "https://random.imagecdn.app/300/300",
      username: "konstantin",
      text: "Сегодня был в прекрсном месте, о чем я тут расскажу. Delectus dolor, saepe tempora quas laudantium architecto",
    },
    {
      img_url: "https://random.imagecdn.app/400/300",
      username: "test_account",
      text: "Delectus dolor, saepe tempora quas laudantium architecto",
    },
    {
      img_url: "https://random.imagecdn.app/300/300",
      username: "common",
      text: "Saepe tempora quas laudantium architecto dolor,",
    },
    {
        img_url: "https://random.imagecdn.app/500/500",
        username: "__official__nike__",
        text: "laudantium architecto quisquam omnis! Veniam esse sit dolorum, quas,",
      },
  ];

  return (
    <>
      <h2 className="text-center">Посты</h2>
      <Row md={2} lg={3}>
        {posts.map((pst) => (
          <Col>
            <Post
              img_url={pst.img_url}
              username={pst.username}
              text={pst.text}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GridPosts;
