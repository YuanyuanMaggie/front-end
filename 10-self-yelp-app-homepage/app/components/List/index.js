import React from 'react'
import Item from './Item'
import './style.less'

const List = props => (
    <div className="list-container">
        {props.data.map((item, index) => {
            return <Item key={index} {...item}/>
        })}
    </div>
)

export default List