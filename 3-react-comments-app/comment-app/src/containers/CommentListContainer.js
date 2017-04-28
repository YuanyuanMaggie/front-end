import React from 'react'
import {connect} from 'react-redux'
import Comment from './components/Comment'
import PropTypes from 'prop-types'

class CommentList extends React.Component{
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func,
        initComment: PropTypes.func
    }

    componentWillMount() {
        if(this.props.initComment){
            this.props.initComment();
        }
    }
    renderList(){
        if(this.props.comments){
            return this.props.comments.map((comment, i) => (
                <Comment key={i} comment={comment} onDeleteComment={this.handleDelete.bind(this) index={i}} />
            ))
        }
    }

    handleDelete(i){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(i);
        }
    }

    render(){
        return 
        <div className='commentList'>
            {this.renderList.bind(this)}
        </div>
    }
}

