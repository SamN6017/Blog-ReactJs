import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { useParams } from "react-router-dom";
import { samplePosts } from "./PostList";

export default function Post() {
  const { posts } = useContext(PostContext);
  const { id } = useParams();
  const post = posts.find((item) => item.id === parseInt(id));
  const samplePost = samplePosts.find((item) => item.id === parseInt(id));

  if (!post && id > 6 && id < 1) {
    return <h2>Post not found</h2>;
  } else if (id >= 1 && id <= 6) {
    return (
      <div className="post-detail">
        <h1>{samplePost.name}</h1>
        <img
          src={samplePost.url}
          alt={samplePost.name}
          className="post-image"
        />
        <p className="author">by {samplePost.author}</p>
        <p>{samplePost.content}</p>
      </div>
    );
  }

  return (
    <div className="post-detail">
      <h1>{post.name}</h1>
      <img src={post.url} alt={post.name} className="post-image" />
      <p className="author">by {post.author}</p>
      <p>{post.content}</p>
    </div>
  );
}
