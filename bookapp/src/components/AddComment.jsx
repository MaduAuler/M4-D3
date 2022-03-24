import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const AddComment = (props) => {

const [comments, setComments] = useState({
  comment: '',
  rate: '',
  elementId: props.idBook
});

const handleChange = (fieldToUpdate, value) => {
  setComments({
    ...comments,
    [fieldToUpdate]: value,
  });
  };

     const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
              method:'POST',
              body:JSON.stringify(comments),
            headers: {
                "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YzJhMjRlYTdiMTAwMTVkMDY3YzkiLCJpYXQiOjE2NDc1MTg0MjMsImV4cCI6MTY0ODcyODAyM30.CdD43Q1LKuq5qsBFX6KGCSGH8-qox4zTvZB48p4MYBA"
              }
              })
              if (response.ok) {
                  alert("form saved!");
                  emptyForm();
                } else {
                  alert("something went wrong!");
                }
              } catch (error) {
                console.log("error was", error);
              }
            };
          
            const emptyForm = () => {
              setComments({
                comments: {
                  comment: '',
                  rate: '',
                 
                },
              });
            };

      return (
        <>
            <div>
        
        <Form onSubmit={handleSubmit} >
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your comment here"
              value={comments.comment}
            
              onChange={(e) =>
                handleChange("comment", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your rate here"
              value={comments.rate}
            
              onChange={(e) =>
                handleChange("rate", e.target.value)
              }
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
      </>
      );
   
 }

  export default AddComment

 