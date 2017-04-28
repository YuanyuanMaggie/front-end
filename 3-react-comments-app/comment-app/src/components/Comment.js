import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.Component{
    constructor(){
        super()
        this.state = {timeString: 'dd'}
    }

    componentWillMount(){
        this._updateTimeString()
        this._timer = setInterval(this._updateTimeString.bind(this), 5000)
    }

    componentWillUnMount(){
        clearInterval(this._timer);
    }

    _updateTimeString(){
        const duration = (+Date.now() - this.props.comment.createdTime) / 1000
        const localTimeString = duration > 60? `${Math.round(duration/60)} mins before`
            : `${Math.round(Math.max(duration, 1))} secs before` 
        
        this.setState({
            timeString: localTimeString
        })
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }
    render(){
        const comment = this.props.comment
        return (
        <div className='comment-group'>
            <span className='comment-username'>{comment.username}: </span>
            <div className='comment-block'>
                <div className='comment-content'>{comment.content}</div>
            </div>
            <div className='comment-info'>
                <div className='commment-date'>{this.state.timeString}</div>
                <button onClick={this.handleDeleteComment.bind(this)} className='comment-delete'>Delete</button>
            </div>
        </div>
        )
    }
    
}
Comment.propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number
}

export default Comment;