import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import CommentInput from '../components/CommentInput'
import {addComment} from '../reducers/index'

class CommentInputContainer extends React.Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }

    handleSubmit (comment) {
        if(this.props.onSubmit){
            this.props.onSubmit(comment)
        }
    }

    render(){
        return <CommentInput onSubmitComment={this.handleSubmit.bind(this)} />
        
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentInputContainer)