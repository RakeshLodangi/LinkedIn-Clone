import "../styles/components.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <strong>{post.user.name}</strong>
        <span className="post-date">
          {new Date(post.createdAt).toLocaleString()}
        </span>
      </div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" className="post-image" />}
    </div>
  );
}
