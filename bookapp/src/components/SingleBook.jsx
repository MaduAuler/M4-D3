import {Component} from 'react'
import{Card, Button, Container} from 'react-bootstrap'


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
    select:''
   }

   boxClick = (e) => {
   if(this.state.select === ""){
    this.setState({
      select: "red"
    })

   }else{
    this.setState({
        select: ""
      })
   }
  }
    render() { 
    
      return (
        <Container >
        <Card style={{backgroundColor: this.state.select, width: '18rem'}}
        onClick={this.boxClick}>
        <Card.Img variant="top" src={this.props.bookObj.img}  />        
        <Card.Body>
          <Card.Title>{this.props.bookObj.title}</Card.Title>
          <Card.Text>
         <p>{this.props.bookObj.category}</p>
         <p>{this.props.bookObj.price}</p>
          </Card.Text>
          <Button >Go somewhere</Button>
        </Card.Body>
      </Card></Container>);
   }
 }

  export default SingleBook

 