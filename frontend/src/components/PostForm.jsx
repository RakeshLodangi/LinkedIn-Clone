import { useState } from "react";
import API from "../utils/api";
import "../styles/components.css";

export default function PostForm({ onPost }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return setError("Content cannot be empty");
    try {
      await API.post("/posts", { content });
      setContent("");
      setError("");
      onPost();
    } catch {
      setError("Failed to create post");
    }
  };

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
