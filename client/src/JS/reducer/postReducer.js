import {   DELETE_COMMENT, EDIT_COMMENT, FAIL_POSTS, GET_POSTS_LOAD, GET_POSTS_SUCCESS, UPDATE_POST
// , TOGGLE_LIKE,TOGGLE_UNLIKE 
} from "../actionTypes/user"
const initState ={
    posts:[],
    isLoading:false,
    errors:[],
    isLiked:false

}
//get allPosts 
export const postReducer =(state=initState ,{type,payload}) => {
    switch (type) {
        case GET_POSTS_LOAD:
             return {...state, isLoading:true};
        case GET_POSTS_SUCCESS: 
                return {...state,isLoading:false, posts:payload };
        case FAIL_POSTS: 
                return {...state,isLoading:false, errors:payload};


         case UPDATE_POST:
                    return{
                      ...state,
                      message:payload,
                    }

         case EDIT_COMMENT:
                        return state.map((post) => {
                          if (post._id === payload.postId) {
                            return {
                              ...post,
                              comments: post.comments.map((comment) => {
                                if (comment._id === payload.commentId) {
                                  return {
                                    ...comment,
                                    text:payload.text,
                                  };
                                } else {
                                  return comment;
                                }
                              }),
                            };
                          } else return post;
                        });
         
         case DELETE_COMMENT:
                            return state.map((post) => {
                              if (post._id === payload.postId) {
                                return {
                                  ...post,
                                  comments: post.comments.filter(
                                    (comment) => comment._id !== payload.commentId
                                  ),
                                };
                              } else return post;
                            });
                
        default:
            return state;
    }
}
