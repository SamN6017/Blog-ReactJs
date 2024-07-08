import React from "react";
import { PostProvider } from "./contexts/PostContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostForm from "./components/PostForm";
import Post from "./components/Post";
import "./App.css"; // Import the CSS file
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";

function App() {
  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <Header />
          <div className="container">
            <h1>React-Blogs</h1>
            <Routes>
              <Route path="/form" element={<PostForm />} />
              <Route path="/" element={<PostList />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </PostProvider>
    </>
  );
}

export default App;
