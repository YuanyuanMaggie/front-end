import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component{
    constructor(){
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            username: ''
        }
    }
    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input type="text" placeholder="Input Phone Number Here" 
                    onChange={this.changeHandle.bind(this)}
                    value={this.state.username} />
                </div>
                <div className="input-container password-container">
                    <i className="icon-bug"></i>
                    <button>Send Code</button>
                    <input type="text" placeholder="Input Code Here"/>
                </div>
                <button className="btn-login" onClick={this.clickHandle.bind(this)}>
                    Login
                </button>
            </div>
        )
    }

    changeHandle(e){
        this.setState({
            username: e.target.value
        })
    }
    clickHandle() {
        if(this.props.loginHandle){
            this.props.loginHandle(this.state.username)
        }
    }
}
export default Login