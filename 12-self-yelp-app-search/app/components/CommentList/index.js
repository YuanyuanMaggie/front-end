import React from 'react'
import Item from './Item'
import './style.less'

const CommentList = props => (
    <div className="comment-list">
        {props.data.map((item, index) => {
            return <Item key={index} {...item}/>
        })}
    </div>
)

export default CommentList