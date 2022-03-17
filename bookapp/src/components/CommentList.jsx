import SingleComment from './SingleComment'


const CommentList = (props) => (
 <>
 <SingleComment stateCProps= {props.commentState}/>
 </>
)

export default CommentList;