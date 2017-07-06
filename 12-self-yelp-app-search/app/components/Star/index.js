import React from 'react'
import './style.less'
const Star = props => {
    let star = props.star || 0
    if (star > 5) {
        star = star % 5
    }

    return (
        <div className="star-container">
            {
                [1,2,3,4,5].map((item, index) => {
                    const lightClass = star>= item ? ' light' : ''
                    return <i key={index} className={'icon-star-full ' + lightClass}></i>
                })
            }
        </div>
    )
}

export default Star