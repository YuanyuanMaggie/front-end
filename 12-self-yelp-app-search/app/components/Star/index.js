import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class Star extends React.Component {
    constructor() {
        super()
        this.shoudComponentsUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            star: 0
        }
    }
    render() {
        let star = this.state.star || 0
        if (star > 5) {
            star = star % 5
        }

        return (
            <div className="star-container">
                {
                    [1,2,3,4,5].map((item, index) => {
                        const lightClass = star>= item ? ' light' : ''
                        return <i key={index} className={'icon-star-full ' + lightClass} 
                        onClick={this.clickHandle.bind(this, item)}></i>
                    })
                }
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            star: this.props.star
        })
    }

    clickHandle(star) {
        if(!this.props.clickCallback) {
            return
        }

        this.setState({
            star: star
        })

        this.props.clickCallback(star)
    }
}

export default Star