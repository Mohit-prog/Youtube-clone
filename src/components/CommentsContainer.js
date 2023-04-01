import React from "react";
import { comment } from "../util/constants";
import user from '../images/user.png';

const Comment = ({ data }) => {
  return (
    <div className="comment">
      <h4>{data?.name}</h4>
      <p>{data?.text}</p>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  if(!comments)
  return null;
  return comments.map((comment, i) => (
    <div>
    <div>
    <img src={user} />
      <Comment key={i} data={comment} />
      </div>
     { (comment.replies)?<div className="replies">
       <CommentsList comments={comment.replies}/>
      </div>:null}
    </div>
  ));
};

const CommentsContainer = () => {
  const Comments = comment;

  return (
    <div>
      <h3>Comments :</h3>

      <CommentsList comments={Comments} />
    </div>
  );
};

export default CommentsContainer;
