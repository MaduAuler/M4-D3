import {Component} from 'react'
import{Card, Button, Container} from 'react-bootstrap'
import CommentArea from './CommentArea'


/*const SingleBook =(props)=> (
    <>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.bookObj.img} />
    <Card.Body>
      <Card.Title>{props.bookObj.title}</Card.Title>
      <Card.Text>
     <p>{props.bookObj.category}</p>
     <p>{props.bookObj.price}</p>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></>
)*/


 
class SingleBook extends Component {
  state = {
    selected: false,
    idBook:""
}
    render() { 
      console.log(this.state.idBook)
      return (
        <>
       {this.state.selected && <CommentArea bookId = {this.state.idBook} selected = {this.state.selected}/>}
        <Container >
        <Card  onClick={(e) => this.setState({ selected: !this.state.selected, idBook: this.props.bookObj.asin  })}
                style={{ border: this.state.selected ? '3px solid red' : 'none', width: '18rem' }}>
        <Card.Img variant="top" src={this.props.bookObj.img}  />        
        <Card.Body>
          <Card.Title>{this.props.bookObj.title}</Card.Title>
          <Card.Text>
         <p>{this.props.bookObj.category}</p>
         <p>{this.props.bookObj.price}</p>
          </Card.Text>
          <Button >Go somewhere</Button>
        </Card.Body>
      </Card>
      </Container>
      </>
      );
   }
 }

  export default SingleBook

 