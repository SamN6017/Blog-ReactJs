// Post Reducer
function PostReducer(state, action) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };
    case "REMOVE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ),
      };
    default:
      return state;
  }
}

export default PostReducer;
