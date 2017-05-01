import React from 'react'
// import CommentList from './CommentList'
import CommentInputContainer from './CommentInputContainer'
import CommentListContainer from './CommentListContainer'
class CommentApp extends React.Component{

    render(){
        return (
            <div className='commentApp'>
                <h1> Comment App on React</h1>
                <p> Day 3 April 28. </p>
                <CommentInputContainer/>
                <CommentListContainer />
            </div>
        )
    }
}

export default CommentApp;