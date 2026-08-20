"use client";

import { useState, useEffect } from "react";
import { blogsAPI, servicesAPI, projectsAPI, contactAPI } from "@/lib/api";

export default function Dashboard() {
  const [stats, setStats] = useState({
    blogs: 0,
    services: 0,
    projects: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      setLoading(true);
      const [blogs, services, projects, contact] = await Promise.all([
        blogsAPI.getAll({ take: 1 }),
        servicesAPI.getAll({ take: 1 }),
        projectsAPI.getAll({ take: 1 }),
        contactAPI.getAll({ take: 1 }),
      ]);

      setStats({
        blogs: blogs.total || 0,
        services: services.total || 0,
        projects: projects.total || 0,
        messages: contact.total || 0,
      });
    } catch (error) {
      console.error("Failed to load stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon, title, value, color }) => (
    <div className={`bg-white rounded-lg shadow p-6 border-l-4 ${color}`}>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-gray-500 text-sm'>{title}</p>
          <p className='text-3xl font-bold text-gray-800'>{value}</p>
        </div>
        <div className='text-4xl'>{icon}</div>
      </div>
    </div>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='space-y-6'>
      <h1 className='text-3xl font-bold text-gray-800'>Dashboard Overview</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <StatCard
          icon='📝'
          title='Total Blogs'
          value={stats.blogs}
          color='border-blue-500'
        />
        <StatCard
          icon='⚙️'
          title='Services'
          value={stats.services}
          color='border-green-500'
        />
        <StatCard
          icon='🎨'
          title='Projects'
          value={stats.projects}
          color='border-purple-500'
        />
        <StatCard
          icon='💬'
          title='Messages'
          value={stats.messages}
          color='border-red-500'
        />
      </div>

      <div className='bg-white rounded-lg shadow p-6'>
        <h2 className='text-xl font-bold text-gray-800 mb-4'>Quick Actions</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <a
            href='/admin/dashboard/blogs/new'
            className='bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded text-center'
          >
            Add Blog Post
          </a>
          <a
            href='/admin/dashboard/services/new'
            className='bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded text-center'
          >
            Add Service
          </a>
          <a
            href='/admin/dashboard/projects/new'
            className='bg-purple-500 hover:bg-purple-600 text-white py-3 px-4 rounded text-center'
          >
            Add Project
          </a>
          <a
            href='/admin/dashboard/team/new'
            className='bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded text-center'
          >
            Add Team Member
          </a>
        </div>
      </div>
    </div>
  );
}
