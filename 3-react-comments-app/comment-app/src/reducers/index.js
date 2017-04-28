const ADD_COMMENT = 'ADD_COMMENT';
const INIT_COMMENT = 'INIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';

// reducer
export default function (state, action){
    if(!state){
        state = {
            comments: []
        }
    }

    switch(action.type){
        case INIT_COMMENT:
            let comments = localStorage.getItem('comments')
            comments = comments ? JSON.parse(comments) : []
            return {
                comments: comments
            };
        case ADD_COMMENT:
            let newComments = [...state.comments, action.comment]
            localStorage.setItem('comments', JSON.stringify(newComments))
            return newComments;
        case DELETE_COMMENT:
            let leftComments = [
                ...state.comments.slice(0, action.commentIndex),
                ...state.comments.slice(action.commentIndex+1)
            ]
            localStorage.setItem('comments', JSON.stringify(leftComments))
            return newComments;
        default:
            return state
    }
};

export const initComment = (comments) => {
    return {
        type: INIT_COMMENT,
        comments
    }
}

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