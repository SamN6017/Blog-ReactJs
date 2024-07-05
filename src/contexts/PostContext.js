import { createContext, useReducer } from "react";
import PostReducer from "./PostReducer";

// Initial state
const initialState = { posts: [] };

// Create context
export const PostContext = createContext(initialState);

export const PostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PostReducer, initialState);

  // Add Post
  function addPost(post) {
    dispatch({
      type: "ADD_POST",
      payload: post,
    });
  }

  // Remove Post
  function removePost(id) {
    dispatch({
      type: "REMOVE_POST",
      payload: id,
    });
  }

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        addPost,
        removePost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
