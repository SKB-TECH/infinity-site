"use client";

import { useState, useEffect } from "react";
import { blogsAPI } from "@/lib/api";
import Link from "next/link";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    loadBlogs();
  }, [page]);

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const skip = (page - 1) * itemsPerPage;
      const response = await blogsAPI.getAll({ skip, take: itemsPerPage });
      setBlogs(response.blogs);
      setTotal(response.total);
    } catch (error) {
      alert("Failed to load blogs: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;

    try {
      await blogsAPI.delete(id);
      loadBlogs();
    } catch (error) {
      alert("Failed to delete blog: " + error.message);
    }
  };

  const totalPages = Math.ceil(total / itemsPerPage);

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-800'>Blog Management</h1>
        <Link
          href='/admin/dashboard/blogs/new'
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded'
        >
          Add New Blog
        </Link>
      </div>

      {loading ? (
        <div className='text-center py-8'>Loading...</div>
      ) : blogs.length === 0 ? (
        <div className='bg-white rounded-lg shadow p-8 text-center'>
          <p className='text-gray-600 mb-4'>No blogs yet</p>
          <Link
            href='/admin/dashboard/blogs/new'
            className='text-blue-600 hover:underline'
          >
            Create your first blog post
          </Link>
        </div>
      ) : (
        <>
          <div className='bg-white rounded-lg shadow overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-100 border-b'>
                <tr>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Title
                  </th>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Author
                  </th>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Category
                  </th>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Views
                  </th>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Status
                  </th>
                  <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog.id} className='border-b hover:bg-gray-50'>
                    <td className='px-6 py-4 text-gray-800'>{blog.title}</td>
                    <td className='px-6 py-4 text-gray-600'>{blog.author}</td>
                    <td className='px-6 py-4 text-gray-600'>{blog.category}</td>
                    <td className='px-6 py-4 text-gray-600'>{blog.views}</td>
                    <td className='px-6 py-4'>
                      <span
                        className={`px-3 py-1 rounded text-sm font-semibold ${
                          blog.published
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className='px-6 py-4 space-x-2'>
                      <Link
                        href={`/admin/dashboard/blogs/${blog.id}`}
                        className='text-blue-600 hover:underline text-sm'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(blog.id)}
                        className='text-red-600 hover:underline text-sm'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='flex items-center justify-center space-x-2'>
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className='px-4 py-2 border rounded disabled:opacity-50'
            >
              Previous
            </button>
            <span className='text-gray-600'>
              Page {page} of {totalPages}
            </span>
            <button
              onClick={() => setPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className='px-4 py-2 border rounded disabled:opacity-50'
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
