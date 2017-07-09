import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import { createHashHistory } from 'history'
import UserInfo from '../../components/UserInfo'
import Header from '../../components/Header'
import OrderHistory from './OrderHistory'
class User extends React.Component {
    constructor() {
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        const userinfo = this.props.userinfo;
        return (
        <div>
            <Header title='User' backRouter='/' />
            <UserInfo {...userinfo}/>
            <OrderHistory username={userinfo.username} />
        </div>
        )
    }

    componentDidMount() {
        if(!this.props.userinfo.username) {
            createHashHistory().push('/login')
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
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)