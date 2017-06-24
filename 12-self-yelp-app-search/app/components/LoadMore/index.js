import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component{
    constructor(){
        super()
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }
    render() {
        return (
            <div>
                <div className="load-more">
                {
                    this.props.isLoadMore ? <span>Loading ... </span> :
                    <span onClick={this.loadMoreHandle.bind(this)}> Load More</span>
                }
                </div>
                <div className="drag-place" ref="autoLoadMore">Auto Loading</div>
            </div>
        )
    }
    loadMoreHandle(){
        this.props.loadMoreFn();
    }
    componentDidMount(){
        const loadMoreFn = this.props.loadMoreFn
        const btn = this.refs.autoLoadMore
        let timeoutId
        function cb() {
            const top = btn.getBoundingClientRect().top
            const windowHeight = window.screen.height
            if(top && top < windowHeight - 16){
                loadMoreFn()
            }
        }

        window.addEventListener('scroll', function () {
            if(this.props.isLoadMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(cb, 50)
        }.bind(this), false);
    }
}
export default LoadMore