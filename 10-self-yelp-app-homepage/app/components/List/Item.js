import React from 'react'

const Item = props => (
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
)

export default Item