import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import CatItem from '../../components/CatItem'
import {getCatList} from '../../fetch/home/home'

class Category extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index: 0,
            data: []
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
                <div>
                    {this.state.data.length?
                         <div id="home-category">
                            <ReactSwipe swipeOptions={opt} key={this.state.data.length}>
                                {this.state.data.map((item, index) => <CatItem key={index} categories={item.categories}/>)}
                            </ReactSwipe>
                            <div className="index-container">
                                <ul>
                                    <li className={this.state.index === 0 ? "selected" : ''}></li>
                                    <li className={this.state.index === 1 ? "selected" : ''}></li>
                                    <li className={this.state.index === 2 ? "selected" : ''}></li>
                                </ul>
                            </div>
                        </div>
                    : <div>Loading</div>
                    }
                </div>
               
        )
    }
    componentDidMount() {
        const result = getCatList()
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json.data
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            if (__DEV__) {
                console.error('Categories error: ', ex.message)
            }
        })
    }
}

export default Category