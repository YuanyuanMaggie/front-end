const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// reducer
export default function (state, action){
    if(!state){
        let localComments = localStorage.getItem('comments');
        localComments = localComments ? JSON.parse(localComments) : []
        state = {
            comments: localComments
        }
    }

    switch(action.type){
        case ADD_COMMENT:
            let newComments = [...state.comments, action.comment]
            localStorage.setItem('comments', JSON.stringify(newComments))
            return {comments: newComments}
        case DELETE_COMMENT:
            let leftComments = [
                ...state.comments.slice(0, action.commentIndex),
                ...state.comments.slice(action.commentIndex+1)
            ]
            localStorage.setItem('comments', JSON.stringify(leftComments))
            return {comments: leftComments}
        default:
            return state
    }
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const delComment = (commentIndex) => {
    return {
        type: DELETE_COMMENT,
        commentIndex
    }
    
}