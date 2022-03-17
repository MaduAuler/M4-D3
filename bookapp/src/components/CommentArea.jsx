import { Component } from "react";
import { Container, ListGroup } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from './AddComment'

class CommentArea extends Component {


  state = {
    stateComments: [],
  };

  componentDidMount(){
     this.fetchComments()
  };


  fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.bookId, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YzJhMjRlYTdiMTAwMTVkMDY3YzkiLCJpYXQiOjE2NDc1MTg0MjMsImV4cCI6MTY0ODcyODAyM30.CdD43Q1LKuq5qsBFX6KGCSGH8-qox4zTvZB48p4MYBA"
        }
        })
        if(response.ok) {
            const data = await response.json()
              this.setState({stateComments: data })
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }

      

  render() {

    return (
        <Container>
       <CommentList commentState= {this.state.stateComments}/>
      
      {this.props.selected && <AddComment idBook = {this.props.bookId}/>}
            </Container>
          
          )}
  
}

export default CommentArea;

