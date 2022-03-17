import {Component} from 'react'
import {Form, Button} from 'react-bootstrap'


class AddComment extends Component {
  state = {
    comments: {
        comment: '',
        rate: '',
        elementId: this.props.idBook
       
      },
}


handleChange = (fieldToUpdate, value) => {
    this.setState({
      comments: {
        ...this.state.comments,
        [fieldToUpdate]: value,
     
      },
    });
  };

      handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments", {
              method:'POST',
              body:JSON.stringify(this.state.comments),
            headers: {
                "Content-Type": "application/json",
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YzJhMjRlYTdiMTAwMTVkMDY3YzkiLCJpYXQiOjE2NDc1MTg0MjMsImV4cCI6MTY0ODcyODAyM30.CdD43Q1LKuq5qsBFX6KGCSGH8-qox4zTvZB48p4MYBA"
              }
              })
              if (response.ok) {
                  alert("form saved!");
                  this.emptyForm();
                } else {
                  alert("something went wrong!");
                }
              } catch (error) {
                console.log("error was", error);
              }
            };
          
            emptyForm = () => {
              this.setState({
                comments: {
                  comment: '',
                  rate: '',
                 
                },
              });
            };

    render() { 
      
      return (
        <>
            <div>
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Your Comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your comment here"
              value={this.state.comments.comment}
            
              onChange={(e) =>
                this.handleChange("comment", e.target.value)
              }
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Your Rate</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your rate here"
              value={this.state.comments.rate}
            
              onChange={(e) =>
                this.handleChange("rate", e.target.value)
              }
              required
            />
          </Form.Group>


          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      </>
      );
   }
 }

  export default AddComment

 