import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {connect} from 'react-redux'
import { createHashHistory } from 'history'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import LoginComponent from '../../components/Login'
import Header from '../../components/Header'
class Login extends React.Component {
    constructor(){
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking: true
        }
    }
    render(){
        return (
            <div>
                <Header title='Login'/>
                {
                    this.state.checking
                    ? <div>Checking</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        )
    }
    componentDidMount(){
        this.doCheck()
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if (userinfo.username) {
            this.goUserPage()
        } else {
            this.setState({
                checking: false
            })
        }
    }
    loginHandle(username) {
        const actions = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        actions.update(userinfo)
        this.goUserPage()
    }
    goUserPage() {
        const params = this.props.match.params
        const router = params.router
        if(router) {
             createHashHistory().push(decodeURIComponent(router))
        } else {
             createHashHistory().push('/user')
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)