import React from 'react'

import './style.less'

const HomeHeader = props => (
    <div id="home-header" className="cf">
        <div className="fl home-header-left ">
            <span>{props.cityName}</span>
            <i className="icon-down"></i>
        </div>
        <div className="fr home-header-right">
            <i className="icon-user"></i>
        </div>
        <div className="search home-header-middle">
            <div className="search-container">
                <i className="icon-search"></i>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>
    </div>
)

export default HomeHeader