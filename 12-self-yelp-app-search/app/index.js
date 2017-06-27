import React from 'react'
import { render } from 'react-dom'
import { Provider} from 'react-redux'
import RouteMap from './router/routeMap'
import {HashRouter} from 'react-router-dom'
import './static/css/common.less'
import './static/css/font.css'

import {createStore} from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


render(
    <HashRouter>
        <Provider store={store}>
            <RouteMap/>
        </Provider>
     </HashRouter>,
    document.getElementById('root')
)