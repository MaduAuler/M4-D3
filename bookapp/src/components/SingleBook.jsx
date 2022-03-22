import {useState} from 'react'
import{Card, Container} from 'react-bootstrap'
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


 
const SingleBook =(props)=> {

const [selected, setSelected] = useState(false)
const [idBook, setIdbook] = useState ("")
  
      
      return (
        <>
       {selected && <CommentArea bookId = {idBook} selected = {selected}/>}
        <Container >
        <Card  onClick={(e) => {setSelected(!selected)
         setIdbook(props.bookObj.asin)}}
                style={{ border: selected ? '3px solid red' : 'none', width: '18rem' }}>
        <Card.Img variant="top" src={props.bookObj.img}  />        
        <Card.Body>
          <Card.Title>{props.bookObj.title}</Card.Title>
          <Card.Text>
         <p>{props.bookObj.category}</p>
         <p>{props.bookObj.price}</p>
          </Card.Text> 
          
        </Card.Body>
      </Card>
      </Container>
      </>
      );
   
 }

  export default SingleBook

 