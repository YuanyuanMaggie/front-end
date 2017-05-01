import React from 'react'
import {connect} from 'react-redux'
import Comment from '../components/Comment'
import PropTypes from 'prop-types'
import {delComment} from '../reducers/index'

class CommentListContainer extends React.Component{
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }
    
    renderList(){
        if(this.props.comments){
            return this.props.comments.map((comment, i) => (
                <Comment key={i} comment={comment} onDeleteComment={this.handleDelete.bind(this)} index={i} />
            ))
        }
    }

    handleDelete(i){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(i);
        }
    }

    render(){
        return (
        <div className='commentList'>
            {this.renderList()}
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteComment: (index) => {
            dispatch(delComment(index))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)

