import { Row, Col, Container } from "react-bootstrap"
import SingleBook from "./SingleBook"
import React from "react"

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


/*class BookList extends React.Component {
state = {
    searchQuery:""
}

getValueInput = (value) => {
    this.setState({
        searchQuery:value
    })
}
render(){
{this.props.books.filter((book) =>
    book.title.toLowerCase().includes)}

  return(<> <input type="text" onChange={ this.getValueInput }></input>
  <Container>{list}</Container>
  </>)
}
}

export default BookList */
