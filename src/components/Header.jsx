// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router for navigation

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">React-Blog</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/form">Add New Post</Link>
      </nav>
    </header>
  );
}
