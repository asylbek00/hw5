import "./Comment.css";
import { CommentDate } from "../components/CommentDate";
import { CommentUserInfo } from "../components/CommentUserInfo";
import { CommentWrapper } from "../components/CommentWrapper";

export function Comment(props) {


  return (
    <div>
         <CommentWrapper className = 'comment-first' >
        <CommentUserInfo 
        img = {props.data.author.avatarUrl}
        name = {props.data.author.name}/>
    
      <div className="Comment-text">{props.data.text}</div>
      <CommentDate date = {props.data.date}/>
    </CommentWrapper>
    <hr /><br />

    <CommentWrapper className = 'comment-second' >
    <CommentUserInfo 
        img = {props.data.author.avatarUrl}
        name = {props.data.author.name}/>
     
      <div className="Comment-text">{props.data.text}</div>
      <CommentDate date = {props.data.date}/>
      </CommentWrapper><hr /><br />

      <CommentWrapper className = 'comment-third'>
        <CommentUserInfo 
        img = {props.data.author.avatarUrl}
        name = {props.data.author.name}/>
      </CommentWrapper><br /><hr />
      <CommentWrapper className = 'comment-fourth'>
      <div className="Comment-text">{props.data.text}</div>
      <CommentDate date = {props.data.date}/>
      </CommentWrapper>

    </div>
  

   
  );
}
