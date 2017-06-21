import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import {connect} from 'react-redux'
import Category from '../../components/Category'
import Ad from './Ad'
class Home extends React.Component {
    constructor(){
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <div>
                <HomeHeader cityName="New York"/>
               {/*<HomeHeader cityName={this.props.userinfo.cityName}/>*/}
               <Category/>
               <Ad/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDisptachToProps(dispatch){
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDisptachToProps
)(Home)