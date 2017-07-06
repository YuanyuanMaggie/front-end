import React from 'react'
import './style.less'
import {Link} from 'react-router-dom'
const CatItem = props => (
    <div className="carousel-item">
        <ul className="cf">
            {
                props.categories.map( (item, index) => {
                    const link = '/search/' + index
                    return <Link key={index} to={link} ><li className="fl"><i className={item.icon}></i>{item.title}</li></Link>
                }
                )
            }
        </ul>
    </div>
)

export default CatItem