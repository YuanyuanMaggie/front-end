import React from 'react'
import './style.less'

const CatItem = props => (
    <div className="carousel-item">
        <ul className="cf">
            {
                props.categories.map( (item, index) => 
                <li key={index} className="fl"><i className={item.icon}></i>{item.title}</li>
                )
            }
        </ul>
    </div>
)

export default CatItem