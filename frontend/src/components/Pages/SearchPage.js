import { InputGroup, Button, Form } from "react-bootstrap";

const SearchPage = () => {
  return (
    <>
      <h2 className="text-center">Поиск</h2>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Введите имя пользователя..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="search-btn">
          Поиск
        </Button>
      </InputGroup>
    </>
  );
};

export default SearchPage;
