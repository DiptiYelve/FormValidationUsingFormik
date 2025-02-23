import React from 'react'
import CommentForm from './CommentForm'
import { useState } from 'react'
import "./ViewComment.css"

function ViewComments() {
    let [comment, setComment] = useState([
        {
            username: "@sample",
            remark: "Greate Course!",
            rating: "5"
        }
    ]);

    function addNewComment(comment){
        setComment((preComments) => [...preComments, comment])
    }

  return (
    <div>
        <CommentForm addNewComment={addNewComment}/>
        <h3>View Comments</h3>
        {
            comment.map((res, idx) => (
                <div className='comment' key={idx}>
                    <span><b>Remark: </b>{res.remark}</span> <br />
                    <span><b>Rating: </b>{res.rating}</span> <br />
                    <span>-{res.username}</span>
                </div>
            ))
        }
    </div>
  )
}

export default ViewComments