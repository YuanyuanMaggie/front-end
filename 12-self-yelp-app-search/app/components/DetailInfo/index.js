import React from 'react'
import './style.less'
import Star from '../Star'
const DetailInfo = props => (
    <div id="detail-info-container">
        <div className="info-container cf">
            <div className="info-img-container fl">
                <img src={props.img}/>
            </div>
            <div className="info-content">
                <h1>{props.title}</h1>
                <div className="star-container">
                    <Star star={props.star}/>
                    <span className="price">${props.price}</span>
                </div>
                <p className="sub-title">{props.subTitle}</p>
            </div>
        </div>
        <p dangerouslySetInnerHTML={{__html: props.desc}} className="info-desc"></p>
    </div>
)
export default DetailInfo