import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndSave extends React.Component{
    constructor(){
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                
                    <button className="selected" onClick={this.saveClickHandle.bind(this)}>
                       {
                           this.props.isSave
                            ? <i className='icon-star-full'></i>
                            : <i className='icon-star-empty'></i>
                       }
                    </button>
                
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}><i className="icon-shopping-bag"></i></button>
                </div>
            </div>
        )
    }
    saveClickHandle(){
        if (this.props.saveClickHandle) {
            this.props.saveClickHandle()
        }
    }
    buyClickHandle() {
        if (this.props.buyClickHandle) {
            this.props.buyClickHandle()
        }
    }
}

export default BuyAndSave