import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CityList from './CityList'
import Header from '../../components/Header'
import LocalStore from '../../util/localStore'

import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFromOtherFile from '../../actions/userinfo'
import { CITYNAME } from '../../config/localStoreKey'
import { createHashHistory } from 'history'
class City extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <Header title={'City'}/>
                <CityList changeCity={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(name) {
        if (name == null) {
            return
        }
        const userinfo = this.props.userinfo
        userinfo.cityName = name
        this.props.userInfoActions.update(userinfo)

        LocalStore.setItem(CITYNAME, name)
        createHashHistory().push('/')

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
)(City)