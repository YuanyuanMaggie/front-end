import React from 'react'
import Item from './Item'
import './style.less'

const OrderList = props => (
    <div>
        {props.data.map((item, index) => {
            return <Item key={index} {...item} submitComment={props.submitComment}/>
        })}
    </div>
)

export default OrderList