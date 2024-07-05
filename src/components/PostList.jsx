import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";

export const samplePosts = [
  {
    name: "Tips for Better Sleep",
    id: 1,
    author: "John Doe",
    url: "data:image/jpeg;base64,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",
    content:
      "Here are some practical tips to improve your sleep quality and wake up feeling refreshed...",
  },
  {
    name: "The Power of Mindfulness",
    id: 2,
    author: "Jane Smith",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOq9DHih_smQ4f6IfvjrjMGQc6K4H-Z5ON5A&s",
    content:
      "Mindfulness practices can help reduce stress, improve focus, and enhance overall well-being. Learn how to get started...",
  },
  {
    name: "Delicious Vegan Recipes",
    id: 3,
    author: "Alice Green",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClJhouCEu1DbZq3JFHdpZ1OhO9W9HDe6qvA&s",
    content:
      "Explore a variety of tasty and healthy vegan dishes that are perfect for any meal. Discover new favorites...",
  },
  {
    name: "Exploring the Ancient Ruins of Machu Picchu",
    id: 4,
    author: "David Walker",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB5i2ehdVEuLN4F1oqrvWy7DRDenPulkARyg&s",
    content:
      "Journey through the breathtaking landscapes of Peru and discover the historical wonders of Machu Picchu. Learn about the Inca civilization and its architectural marvels...",
  },
  {
    name: "Mastering JavaScript Loops",
    id: 5,
    author: "Sarah Lee",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbY4TXGof565MGoC0FaZskZEycafrGRrxrQ&s",
    content:
      "This tutorial dives deep into using loops effectively in JavaScript. Learn about `for`, `while`, and `do...while` loops, and explore practical examples to enhance your coding skills...",
  },
  {
    name: "Creating a Beautiful Upcycled Planter",
    id: 6,
    author: "Michael Brown",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNs7blG_w9TjJ5fL14ajImDpthzAKBjnC3A&s",
    content:
      "Give new life to old materials with this fun and creative DIY project! Learn how to transform ordinary items into a unique and stylish planter for your home...",
  },
];

export default function PostList() {
  const { posts } = useContext(PostContext);
  return (
    <div className="post-list">
      {posts.map((item) => (
        <div key={item.id} className="post-preview">
          <h2>{item.name}</h2>
          <img src={item.url} alt={item.name} className="post-image" />
          <p>{item.content.substring(0, 100)}...</p>
          <p className="author">by {item.author}</p>
          <Link to={`/post/${item.id}`} className="button">
            See Post
          </Link>
        </div>
      ))}
      {samplePosts.map((item) => (
        <div key={item.id} className="post-preview">
          <h2>{item.name}</h2>
          <img src={item.url} alt={item.name} className="post-image" />
          <p>{item.content.substring(0, 100)}...</p>
          <p className="author">by {item.author}</p>
          <Link to={`/post/${item.id}`} className="button">
            See Post
          </Link>
        </div>
      ))}
    </div>
  );
}
