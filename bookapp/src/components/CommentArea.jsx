import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CommentList from "./CommentList";
import AddComment from './AddComment'

const CommentArea = (props) => {

const [stateComments, setComments] = useState([])


  useEffect = () =>{
    fetchComments()
  };


  const fetchComments = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.bookId, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YzJhMjRlYTdiMTAwMTVkMDY3YzkiLCJpYXQiOjE2NDc1MTg0MjMsImV4cCI6MTY0ODcyODAyM30.CdD43Q1LKuq5qsBFX6KGCSGH8-qox4zTvZB48p4MYBA"
        }
        })
        if(response.ok) {
            const data = await response.json()
              setComments( data )
          } else {
              console.log('error while fetching')
          }
        } catch(e) {
          console.log(e)
        }
      }

 

    return (
        <Container>
       <CommentList commentState= {stateComments}/>
      {props.selected && <AddComment idBook = {props.bookId}/>}
            </Container>
          
          )
  
}

export default CommentArea;

