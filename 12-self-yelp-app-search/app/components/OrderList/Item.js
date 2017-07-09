import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../Star'
import {postComment} from '../../fetch/user/orderhistory.js'

class OrderItem extends React.Component {
    constructor() {
        super()
        this.shoudComponentsUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            commentState: 2,
            star: 0,
            text: ''
        }
    }
    render() {
        return (
            <div className="cf order-item-container">
                <div className="order-item-img fl">
                    <img src={this.props.img}/>
                </div>
                <div className="order-item-comment fr">
                    {
                        this.state.commentState === 0
                        ? <button className='btn' onClick={this.showComment.bind(this)}>Review Now</button>
                        : this.state.commentState === 1
                            ? ''
                            : <button className='btn unselected-btn'>Reviewed</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>Name : {this.props.title}</span>
                    <span>Count : {this.props.count}</span>
                    <span>Price: ${this.props.price}</span>
                </div>
                {
                    this.state.commentState === 1
                    ? <div className='comment-text-container'>
                        <textarea className="comment-text" onChange={this.ChangeHandle.bind(this)}></textarea>
                        <div>
                            <Star star={this.state.star} clickCallback={this.starClickCallback.bind(this)} />
                        </div>
                        <button className="btn" onClick={this.submitComment.bind(this)}>Submit</button>
                        <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>Cancel</button>
                    </div>
                    :''
                }
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props)
        this.setState({
            commentState: this.props.commentState
        })
    }

    showComment() {
        this.setState( {
            commentState: 1
        })
    }

    ChangeHandle(e) {
        this.setState({
            text: e.target.value
        })
    }

    submitComment() {
        if (!this.props.submitComment) {
            return
        }
        const submitComment = this.props.submitComment
        const id = this.props.id
        const star = this.state.star 
        const commentText = this.state.text
        const value = commentText.trim()
        if (!value) {
            return
        }

        submitComment(id, value, star, this.commentOk.bind(this))
    }

    commentOk() {
        this.setState({
            commentState: 2
        })
    }

    hideComment() {
        this.setState({
            commentState: 0
        })
    }

    starClickCallback(star) {
        this.setState({
            star: star
        })
    }
}

export default OrderItem