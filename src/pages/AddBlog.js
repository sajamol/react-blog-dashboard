import { useState } from 'react';

export default function AddBlog() {
  const [form, setForm] = useState({ name: '', desc: '', author: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Form submitted. Data not sent to API (as per requirement).');
  };

  return (
    <div>
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Blog Name</label><br />
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label><br />
          <textarea name="desc" value={form.desc} onChange={handleChange} required />
        </div>
        <div>
          <label>Author Name</label><br />
          <input name="author" value={form.author} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
