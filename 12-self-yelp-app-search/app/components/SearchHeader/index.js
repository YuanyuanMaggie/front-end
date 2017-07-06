import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'

import './style.less'

class SearchHeader extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="search-header" className="cf">
                <span className="back-icon fl" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput value={this.props.keyword || ''}/>
                </div>
            </div>
        )
    }
    clickHandle() {
        window.history.back()
    }
}

export default SearchHeader