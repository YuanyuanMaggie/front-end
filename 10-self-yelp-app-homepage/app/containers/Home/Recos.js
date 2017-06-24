import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../fetch/home/home'
import List from '../../components/List'
import LoadMore from '../../components/LoadMore'

class Recos extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">Recommendations</h2>
            {
               this.state.data.length?
               <List data={this.state.data}/>
               :<span>Loading</span>
            }
            {
                this.state.hasMore
                ?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreFn.bind(this)} />
                : ''
            }
            </div>
        )
    }
    componentDidMount() {
        this.loadFirstData();
    }

    loadFirstData(){
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }
    loadMoreFn(){
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        this.resultHandle(result)

        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    resultHandle(result) {
        result.then( res => {
            return res.json()
        }).then(json => {
            const hasMore = json.hasMore
            const data = json.data

            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            })
        }).catch( ex => {
            if (__DEV__) {
                console.error(' Error happen when load recommendations. ', ex.message )
            }
        })
    }
}

export default Recos