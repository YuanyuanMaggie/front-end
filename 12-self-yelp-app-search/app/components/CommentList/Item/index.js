import React from 'react'
import Star from '../../Star'
import './style.less'

const CommentItem = props => (
    <div className="comment-item">
        <h3>
            <i className='icon-user'></i>
            {props.username}
        </h3>
        <Star star={props.star}/>
        <p>{props.comment}</p>
    </div>
)

export default CommentItem