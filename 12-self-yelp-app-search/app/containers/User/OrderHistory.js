import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderHistoryData, postComment } from '../../fetch/user/orderhistory'

import OrderListComponent from '../../components/OrderList'

import './style.less'

class OrderHistory extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>Order History</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div>Loading...</div>
                }
            </div>
        )
    }
    componentDidMount() {
        const username = this.props.username
        if (username) {
            this.loadOrderList(username)
        }
    }
    
    loadOrderList(username) {
        const result = getOrderHistoryData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(ex => {
            if (__DEV__) {
                console.error('Get order History Error, ', ex.message)
            }
        })
    }
  
    submitComment(id , value, star, callback) {
        const result = postComment(id, value, star)
        result.then(res => {
            return res.json()
        }).then(json => {
            if (json.errno === 0) {
                callback()
            }
        })
    }
}

export default OrderHistory