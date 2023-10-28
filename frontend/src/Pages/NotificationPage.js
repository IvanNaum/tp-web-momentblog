import { ListGroup, Button } from "react-bootstrap";

const NotificationPage = () => {
  return (
    <>
      <h2 className="text-center">Уведомления</h2>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          @test подписался на Вас{" "}
          <Button variant="outline-primary" size="sm">
            Подписаться в ответ
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          @vasya оставил комментарий под постом...
          <Button variant="outline-primary" size="sm">
            Перейти
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          @InfiniteDreamer лайкнул ваш пост...
          <Button variant="outline-primary" size="sm">
            Перейти
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          @common оставил комментарий под постом...
          <Button variant="outline-primary" size="sm">
            Перейти
          </Button>
        </ListGroup.Item>

        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          @AdventureSeeker подписался на Вас
          <Button variant="outline-primary" size="sm">
            Подписаться в ответ
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default NotificationPage;
