import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import App from '../containers'
import Home from '../containers/Home'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

class RouterMap extends React.Component {
    render(){
        return (
            <App>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/city' component={City}/>
                    <Route path='/user' component={User}/>
                    <Route path='/search/:type(/:keyword)' component={Search}/>
                    <Route path='/detail/:id' component={Detail}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </App>
        )
    }
}

export default RouterMap