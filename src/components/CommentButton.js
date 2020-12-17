import React from 'react';
import './CommentButton.css';
import comment from '../images/comment.png';

export const CommentButton = ({
  onClick
}) => {
  return (
    <div onClick={onClick} className='comment-button'>
      <img className='comment-image' src={comment} />
    </div>
  )
}

export default CommentButton;