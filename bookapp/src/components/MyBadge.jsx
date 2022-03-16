import {Badge, Button} from "react-bootstrap";

const MyBadge =(props)=> (
  <>
  <Button variant="primary">
  Profile <Badge variant="light" style={{color: props.color}}>{props.text}</Badge>
  <span className="sr-only">unread messages</span>
</Button>
  </>
)

export default MyBadge