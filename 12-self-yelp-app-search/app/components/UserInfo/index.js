import React from 'react'
import './style.less'

const UserInfo = props => (
         <div className="userinfo-container">
            <p>
                <i className="icon-user"></i>
                <span>{props.username}</span>
            </p>
            <p>
                <i className="icon-shopping-bag"></i>
                <span>{props.cityName}</span>
            </p>
        </div>
    )

export default UserInfo