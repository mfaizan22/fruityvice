import Card from "react-bootstrap/Card";

function Card1({ heading, children }) {
  return (
    <Card style={{ width: "18rem" }} className=" card mb-2">
      <Card.Header>{heading}</Card.Header>
      <Card.Body>
        <Card.Text>
          {children}
          {/* Note:
            <em> The shown data is based on 100 grams of the listed fruit.</em> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Card1;
