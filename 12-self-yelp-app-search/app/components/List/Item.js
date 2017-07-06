import React from 'react'
import {Link} from 'react-router-dom'
const Item = props => (
     <Link to={'/detail/' + props.id}>
        <div className="list-item cf">
            <div className="item-img-container fl">
                <img src={props.img} alt={props.title}/>
            </div>
            <div className="item-content fl">
                <div className="item-title-container cf">
                    <h3 className="fl">{props.title}</h3>
                    <span className="fr">{props.distance}</span>
                </div>
                <p className="item-sub-title">
                    {props.subTitle}
                </p>
                <div className="item-price-container cf">
                    <span className="price fl">${props.price}</span>
                    <span className="mumber fr">Sold {props.mumber}</span>
                </div>
            </div>
        </div>
     </Link>
)

export default Item