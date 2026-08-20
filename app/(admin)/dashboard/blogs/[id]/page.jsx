"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { blogsAPI } from "@/lib/api";

export default function BlogEditor() {
  const params = useParams();
  const router = useRouter();
  const isNew = params.id === "new";

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    excerpt: "",
    featuredImage: "",
    author: "",
    category: "",
    tags: [],
    published: false,
  });

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!isNew) {
      loadBlog();
    }
  }, [params.id, isNew]);

  const loadBlog = async () => {
    try {
      const blog = await blogsAPI.getById(params.id);
      setFormData(blog);
    } catch (error) {
      alert("Failed to load blog: " + error.message);
      router.push("/admin/dashboard/blogs");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(",").map((tag) => tag.trim());
    setFormData((prev) => ({ ...prev, tags }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (isNew) {
        await blogsAPI.create(formData);
      } else {
        await blogsAPI.update(params.id, formData);
      }
      router.push("/admin/dashboard/blogs");
    } catch (error) {
      alert("Failed to save blog: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className='max-w-4xl'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold text-gray-800'>
          {isNew ? "Create New Blog" : "Edit Blog"}
        </h1>
        <button
          onClick={() => router.back()}
          className='text-gray-600 hover:text-gray-800'
        >
          ← Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-lg shadow p-8 space-y-6'
      >
        <div>
          <label className='block text-gray-700 font-semibold mb-2'>
            Title *
          </label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-gray-700 font-semibold mb-2'>
              Author *
            </label>
            <input
              type='text'
              name='author'
              value={formData.author}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              required
            />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-2'>
              Category
            </label>
            <input
              type='text'
              name='category'
              value={formData.category}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-gray-700 font-semibold mb-2'>
            Featured Image URL
          </label>
          <input
            type='url'
            name='featuredImage'
            value={formData.featuredImage}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-semibold mb-2'>
            Excerpt
          </label>
          <textarea
            name='excerpt'
            value={formData.excerpt}
            onChange={handleChange}
            rows='3'
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
          />
        </div>

        <div>
          <label className='block text-gray-700 font-semibold mb-2'>
            Content *
          </label>
          <textarea
            name='content'
            value={formData.content}
            onChange={handleChange}
            rows='10'
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            required
          />
        </div>

        <div>
          <label className='block text-gray-700 font-semibold mb-2'>
            Tags (comma-separated)
          </label>
          <input
            type='text'
            value={formData.tags.join(", ")}
            onChange={handleTagsChange}
            className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
            placeholder='tag1, tag2, tag3'
          />
        </div>

        <div className='flex items-center'>
          <input
            type='checkbox'
            name='published'
            checked={formData.published}
            onChange={handleChange}
            className='w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500'
          />
          <label className='ml-2 text-gray-700 font-semibold'>
            Publish this blog
          </label>
        </div>

        <div className='flex space-x-4'>
          <button
            type='submit'
            disabled={saving}
            className='bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-8 rounded'
          >
            {saving ? "Saving..." : "Save Blog"}
          </button>
          <button
            type='button'
            onClick={() => router.back()}
            className='bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded'
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
