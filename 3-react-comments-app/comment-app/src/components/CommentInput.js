import React from 'react'
import PropTypes from 'prop-types'

class CommentInput extends React.Component {
    static propTypes = {
        onSubmitComment: PropTypes.func
    }

    constructor(){
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount () {
        this._loadUsername();
    }

    componentDidMount () {
        this.textarea.focus()
    }

    handleCommentSubmit(){
        if(this.props.onSubmitComment){
            const comment = {
                username: this.state.username,
                content: this.state.content,
                createdTime: new Date()
            }
            this.props.onSubmitComment(comment);
            this.setState({content: ''})
        }
    }

    handleUsernameChange(e){
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange(e){
        this.setState({
            content: e.target.value
        })
    }

    handleUsernameBlur(){
        localStorage.setItem('username', this.state.username);
    }

    _loadUsername () {
        const localUsername = localStorage.getItem('username');
        if(localUsername){
            this.setState({
                username: localUsername
            })
        }
    }

    render(){
        return (
        <div className='comment-area'>
            <div className='input-area'>
                <label htmlFor='username'>
                    username:
                </label>
                <input id='username' type='text' value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)}/>
            </div>
            <div className='input-area'>
                <label htmlFor='content'>
                    comment:
                </label>
                <textarea ref={(textarea) => this.textarea = textarea} id='content' value={this.state.content} onChange={this.handleCommentChange.bind(this)} />
            </div>
            <button onClick={this.handleCommentSubmit.bind(this)} className='comment-submit'>Comment</button>
        </div>
        )
    }
}

export default CommentInput;
