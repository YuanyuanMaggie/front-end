import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Comment from './Comment'
import Header from '../../components/Header'
import Info from './Info'
import BuyAndSave from './BuyAndSave'

import './style.less'
class Details extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        const id = this.props.match.params.id || 0
        return (
            <div>
                <Header title='Details'/>
                <Info id={id} />
                <BuyAndSave id={id}/>
                <Comment id={id}/>
            </div>
        )
    }
}

module.exports = Details