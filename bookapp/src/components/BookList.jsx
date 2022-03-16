import { Row, Col, Container } from "react-bootstrap"
import SingleBook from "./SingleBook"

const BookList =(props)=> (
    
    <Container>
<Row>
     {props.booksArr.map((book) => (
        <Col>
          <SingleBook bookObj = {book} />
          </Col>  
          ))}
  </Row>
    </Container>
)

export default BookList