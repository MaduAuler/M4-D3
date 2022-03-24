import {Form, Button, Container, Row, Col} from "react-bootstrap";
import {useState} from 'react'
import WarningSign from "./WarningSign";

const Registration =()=> {
    const [registration, setRegistration] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        passwordConfirm:""
      });

      const handleChange = (fieldToUpdate, value) => {
        setRegistration({
          ...registration,
          [fieldToUpdate]: value,
        });
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
                };
              
        
return(
<>
<Container>
      <Row className="justify-content-center mt-2">
        <Col className="text-center">
<Form onSubmit={handleSubmit}>
          <Form.Group className="justify-content-center">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name here"
              value={registration.name}
            
              onChange={(e) =>
                handleChange("name", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your surname here"
              value={registration.surname}

              onChange={(e) =>
                handleChange("surname", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your email here"
              value={registration.email}
            
              onChange={(e) =>
                handleChange("email", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your password here"
              value={registration.password}
            
              onChange={(e) =>
                handleChange("password", e.target.value)
              }
              required
            />
          </Form.Group>


          <Form.Group>
            <Form.Label>Password Confirm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your password here"
              value={registration.passwordConfirm}
            
              onChange={(e) =>
                handleChange("passwordConfirm", e.target.value)
              }
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        </Row>
        </Container>
</>
)
  
}
//const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/
export default Registration