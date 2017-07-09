import React from 'react'
import {Link} from 'react-router-dom'
import './style.less'
import SearchInput from '../SearchInput'

const HomeHeader = props => (
    <div id="home-header" className="cf">
        <div className="fl home-header-left ">
            <Link to="/city">
                <span>{props.cityName}</span>
                <i className="icon-down"></i>
            </Link>
        </div>
        <div className="fr home-header-right">
            <Link to="/user">
            <i className="icon-user"></i>
            </Link>
        </div>
        <div className="search home-header-middle">
            <div className="search-container">
                <i className="icon-search"></i>
                <SearchInput value=""/>
            </div>
        </div>
    </div>
)

export default HomeHeader