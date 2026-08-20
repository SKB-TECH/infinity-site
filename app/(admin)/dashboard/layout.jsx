"use client";

export const dynamic = "force-dynamic";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLayout({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/admin/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-gray-100'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500 mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} bg-gray-900 text-white transition-all duration-300`}
      >
        <div className='p-6 flex items-center justify-between'>
          {sidebarOpen && <h1 className='text-xl font-bold'>Afrikanium</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='text-gray-400 hover:text-white'
          >
            ☰
          </button>
        </div>

        <nav className='mt-8 space-y-2 px-4'>
          <NavLink href='/admin/dashboard' sidebarOpen={sidebarOpen} icon='📊'>
            Dashboard
          </NavLink>
          <NavLink
            href='/admin/dashboard/blogs'
            sidebarOpen={sidebarOpen}
            icon='📝'
          >
            Blogs
          </NavLink>
          <NavLink
            href='/admin/dashboard/services'
            sidebarOpen={sidebarOpen}
            icon='⚙️'
          >
            Services
          </NavLink>
          <NavLink
            href='/admin/dashboard/projects'
            sidebarOpen={sidebarOpen}
            icon='🎨'
          >
            Projects
          </NavLink>
          <NavLink
            href='/admin/dashboard/team'
            sidebarOpen={sidebarOpen}
            icon='👥'
          >
            Team
          </NavLink>
          <NavLink
            href='/admin/dashboard/testimonials'
            sidebarOpen={sidebarOpen}
            icon='⭐'
          >
            Testimonials
          </NavLink>
          <NavLink
            href='/admin/dashboard/pricing'
            sidebarOpen={sidebarOpen}
            icon='💰'
          >
            Pricing
          </NavLink>
          <NavLink
            href='/admin/dashboard/faqs'
            sidebarOpen={sidebarOpen}
            icon='❓'
          >
            FAQs
          </NavLink>
          <NavLink
            href='/admin/dashboard/contact'
            sidebarOpen={sidebarOpen}
            icon='💬'
          >
            Messages
          </NavLink>
        </nav>

        <div className='absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700'>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/admin/login");
            }}
            className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
          >
            {sidebarOpen ? "Logout" : "🚪"}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className='flex-1 overflow-auto'>
        <header className='bg-white shadow'>
          <div className='px-6 py-4 flex items-center justify-between'>
            <h2 className='text-2xl font-semibold text-gray-800'>
              Admin Dashboard
            </h2>
            <div className='flex items-center space-x-4'>
              <span className='text-gray-600'>{user?.name}</span>
              <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white'>
                {user?.name?.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className='p-6'>{children}</main>
      </div>
    </div>
  );
}

function NavLink({ href, sidebarOpen, icon, children }) {
  return (
    <Link
      href={href}
      className='flex items-center space-x-3 px-4 py-3 rounded hover:bg-gray-800 transition'
    >
      <span className='text-xl'>{icon}</span>
      {sidebarOpen && <span>{children}</span>}
    </Link>
  );
}
