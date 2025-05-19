import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Blog Dashboard</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>{post.id}.</strong> {post.title}</li>
        ))}
      </ul>
    </div>
  );
}
