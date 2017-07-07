import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {createHashHistory} from 'history'

import * as saveActionsFromFile from '../../actions/save'
import BuyAndSaveComponent from '../../components/BuyAndSave'

class BuyAndSave extends React.Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            isSave : false
        }
    }
    render() {
        return <BuyAndSaveComponent isSave = {this.state.isSave} 
        buyClickHandle={this.buyHandle.bind(this)} saveClickHandle={this.saveHandle.bind(this)}/>
    }

    componentDidMount() {
        this.checkSaveState()
    }

    buyHandle(){
        const loginFlag = this.loginCheck()
        if(!loginFlag) {
            return
        }

        // Do Buying action
        // ...

        createHashHistory().push('/User')
    }

    saveHandle(){
        const loginFlag = this.loginCheck()
        if(!loginFlag) {
            return
        }

        const id = this.props.id
        const saveActions = this.props.saveActions
        if(this.state.isSave) {
            saveActions.remove({id:id})
        } else {
            saveActions.add({id:id})
        }

        this.setState({
            isSave: !this.state.isSave
        })
    }

    loginCheck(){
        const id = this.props.id
        const userinfo = this.props.userinfo
        if(!userinfo.username) {
            createHashHistory().push('/login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

    checkSaveState() {
        const id = this.props.id
        const save = this.props.save
        save.some(item => {
            if(item.id === id) {
                this.setState({
                    isSave : true
                })
                return true
            }
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        save: state.save
    }
}

function mapDispatchToProps(dispatch) {
    return {
        saveActions: bindActionCreators(saveActionsFromFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BuyAndSave)