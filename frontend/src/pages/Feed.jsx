import { useEffect, useState } from "react";
import API from "../utils/api";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import "../styles/feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await API.get("/posts");
    if (res.data.success) setPosts(res.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed-container">
      <PostForm onPost={fetchPosts} />
      <div className="posts-list">
        {posts.map((p) => (
          <PostCard key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
