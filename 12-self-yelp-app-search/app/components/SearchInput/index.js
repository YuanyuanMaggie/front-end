import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { createHashHistory } from 'history'
import './style.less'

class SearchInput extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input
                className="search-input" 
                type="text" 
                placeholder="Search..." 
                onChange={this.ChangeHandle.bind(this)}
                onKeyUp={this.KeyUpHandle.bind(this)}
                value={this.state.value}/>
        )
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
    }
    ChangeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    KeyUpHandle(e) {
        if (e.keyCode !== 13) {
            return
        }
        this.enterHandle(e.target.value)
    }

    enterHandle(value) {
        createHashHistory().push('/search/all/' + encodeURIComponent(value))
    }
}

export default SearchInput