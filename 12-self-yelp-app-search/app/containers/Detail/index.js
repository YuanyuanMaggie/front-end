import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Details extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <h1>Details</h1>
            </div>
        )
    }
}

module.exports = Details