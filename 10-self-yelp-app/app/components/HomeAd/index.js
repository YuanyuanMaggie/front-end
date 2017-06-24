import React from 'react'

import './style.less'

const HomeAd = props => (
    <div id="home-ad-nice">
        <h2>Special Deal</h2>
        <div className="ad-container cf">
            {props.data.map((item, index) => {
                return <div key={index} className="ad-item-nice fl">
                    <a href={item.link} target="_blank">
                        <img src={item.img} alt={item.title}/>
                    </a>
                </div>
            })}
        </div>
    </div>
)

export default HomeAd