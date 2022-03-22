import { ListGroup} from "react-bootstrap";


const SingleComment = (props) => (
 <>
<ListGroup>
{props.stateCProps.map((res) => (
      <ListGroup.Item key={res.elementId}>
        Comment: {res.comment} Rate: {res.rate}
      </ListGroup.Item>
    ))
  }
</ListGroup>
 </>
)

export default SingleComment;