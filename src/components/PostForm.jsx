import React, { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";

export default function PostForm() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [url, setURL] = useState("");
  const [author, setAuthor] = useState("");
  const { addPost } = useContext(PostContext);

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 1000000),
      name,
      url,
      author,
      content,
    };
    addPost(newPost);
    setName("");
    setURL("");
    setAuthor("");
    setContent("");
  }

  return (
    <div className="container">
      <h2>Create a New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Blog name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="url"
          placeholder="Link for photo"
          value={url}
          onChange={(e) => setURL(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <textarea
          placeholder="Content here"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
