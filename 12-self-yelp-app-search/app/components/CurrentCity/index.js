import React from 'react'
import './style.less'
const CurrentCity= props => (
     <div className="current-city">
        <h2>{props.cityName}</h2>
    </div>
)

export default CurrentCity