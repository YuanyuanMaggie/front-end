import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 3000,
            callback: function (index) {
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="cf">
                            <li className="fl"><i className="icon-library"></i>Places</li>
                            <li className="fl"><i className="icon-modern-mic"></i>KTV</li>
                            <li className="fl"><i className="icon-shopping-bag"></i>Shopping</li>
                            <li className="fl"><i className="icon-user"></i>Service</li>
                            <li className="fl"><i className="icon-baseball"></i>Sports</li>
                            <li className="fl"><i className="icon-heartbeat"></i>Hair</li>
                            <li className="fl"><i className="icon-man-woman"></i>Family</li>
                            <li className="fl"><i className="icon-meter2"></i>Snacks</li>
                            <li className="fl"><i className="icon-spoon-knife"></i>Buffet</li>
                            <li className="fl"><i className="icon-glass"></i>Bar</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="cf">
                            <li className="fl"><i className="icon-spoon-knife"></i>Food</li>
                            <li className="fl"><i className="icon-image"></i>Movies</li>
                            <li className="fl"><i className="icon-library"></i>Hotel</li>
                            <li className="fl"><i className="icon-file-music"></i>Music</li>
                            <li className="fl"><i className="icon-library"></i>Delivery</li>
                            <li className="fl"><i className="icon-firefox"></i>Hotpot</li>
                            <li className="fl"><i className="icon-coin-dollar"></i>Finance</li>
                            <li className="fl"><i className="icon-rocket"></i>Travel</li>
                            <li className="fl"><i className="icon-bubbles"></i>Massage</li>
                            <li className="fl"><i className="icon-tablet"></i>Digit</li>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="cf">
                            <li className="fl"><i className="icon-sack"></i>Sushi</li>
                            <li className="fl"><i className="icon-child_friendly"></i>Baby</li>
                            <li className="fl"><i className="icon-coffee"></i>Marriage</li>
                            <li className="fl"><i className="icon-book"></i>Education</li>
                            <li className="fl"><i className="icon-coffee"></i>Dinning</li>
                            <li className="fl"><i className="icon-airplane"></i>Ticket</li>
                            <li className="fl"><i className="icon-coffee"></i>BBQ</li>
                            <li className="fl"><i className="icon-coffee"></i>Home</li>
                            <li className="fl"><i className="icon-coffee"></i>Pet</li>
                            <li className="fl"><i className="icon-coffee"></i>All</li>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category