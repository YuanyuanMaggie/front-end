import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

class Hello extends React.Component {
    render() {
        return (
            <p>hello world as usual</p>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)