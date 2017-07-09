import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { createHashHistory } from 'history'
import './style.less'

class Header extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
    clickHandle() {
        const backRouter = this.props.backRouter
        if(backRouter) {
            createHashHistory().push(backRouter)
        } else {
            window.history.back()
        }
    }
}

export default Header