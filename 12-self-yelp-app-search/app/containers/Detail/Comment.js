import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from '../../fetch/detail/detail'
import CommentList from '../../components/CommentList'
import LoadMore from '../../components/LoadMore'

class Comment extends React.Component {
    constructor() {
        super();
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
            <div className="detail-comment-subpage">
                <h2>Comments</h2>
            {
               this.state.data.length?
               <CommentList data={this.state.data}/>
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

        const id = this.props.id
        const result = getCommentData(0, id)
        this.resultHandle(result)
    }
    loadMoreFn(){
        this.setState({
            isLoadingMore: true
        })

        const id = this.props.id
        const page = this.state.page
        const result = getCommentData(page, id)
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

export default Comment