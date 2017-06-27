import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCities } from '../../../fetch/home/home'

import './style.less'

class CityList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            title: 'City'
        }
    }
    render() {
        return (
            <div>
            {
               this.state.data.length?
               <div className="city-list-container">
                    <h3>{this.state.title}</h3>
                    <ul className="cf">
                        {this.state.data.map((item, index) => (
                            <li key={index}>
                                <span onClick={this.props.changeCity.bind(this, item.name)}>{item.name}</span>
                            </li>
                        ))
                        }
                    </ul>
                </div>
               :<span>Loading</span>
            }
            </div>
        )
    }

    componentDidMount() {
        const result = getCities()
        result.then(res => {
            return res.json()
        }).then(json => {
            const data = json.data
            const title = json.title
            if (data.length) {
                this.setState({
                    data: data,
                    title: title
                })
            }
        }).catch(ex => {
            if (__DEV__) {
                console.error('Ads error: ', ex.message)
            }
        })
    }
}

export default CityList