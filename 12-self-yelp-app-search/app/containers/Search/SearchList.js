import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getSearchData } from '../../fetch/search/search'
import List from '../../components/List'
import LoadMore from '../../components/LoadMore'

const initialState = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
class SearchList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = initialState
    }
    render() {
        return (
            <div>
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
        this.loadMoreFn();
    }

    loadMoreFn(){
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const keyword = this.props.keyword || ''
        const category = this.props.category || 'all'
        const page = this.state.page
        const result = getSearchData(page, cityName, category, keyword)
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
                console.error(' Error happen when load Search List ', ex.message )
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword
        const category = this.props.category
        if(keyword === prevProps.keyword && category === prevProps.category) {
            return
        }
        this.setState(initialState)
        this.loadMoreFn()
    }
}

export default SearchList