import {useState} from 'react'
import{Card, Container, Col, Row} from 'react-bootstrap'
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
        <Container fluid className='d-flex mt-5' >
          <div style={{width: '25%'}}>
            <h2 className='text-center'>Click to see the comments</h2>
       {selected && <CommentArea bookId = {idBook} selected = {selected}/>}
       </div>
        
        <Row style={{width: '75%'}}>
          {props.booksArr.map((bookObj) => (
       
         <Col>
          <Card className='m-3' onClick={(e) => {setSelected(!selected)
             setIdbook(bookObj.asin)}}
              style={{ width: '18rem', height: '35rem'}}>
            <Card.Img variant="top" src={bookObj.img} style={{ height: '60%'}} />        
            <Card.Body>
            <Card.Title>{bookObj.title}</Card.Title>
           <Card.Text>
           <p>{bookObj.category}</p>
           <p>{bookObj.price}</p>
           </Card.Text> 
           </Card.Body>
         </Card>
           </Col>  
           ))}
  </Row>
      </Container>
      </>
      );
   
 }

  export default SingleBook

 