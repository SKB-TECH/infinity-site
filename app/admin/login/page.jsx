"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4'>
      <div className='bg-white rounded-lg shadow-xl w-full max-w-md p-8'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-2'>
          Afrikanium Admin
        </h1>
        <p className='text-center text-gray-600 mb-8'>
          Sign in to your dashboard
        </p>

        {error && (
          <div className='mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded'>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-gray-700 font-semibold mb-2'>
              Email
            </label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              placeholder='admin@afrikanium.com'
              required
            />
          </div>

          <div>
            <label className='block text-gray-700 font-semibold mb-2'>
              Password
            </label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
              placeholder='••••••••'
              required
            />
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 rounded transition'
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded'>
          <p className='text-sm text-gray-600'>
            <strong>Demo credentials:</strong>
            <br />
            Email: admin@afrikanium.com
            <br />
            Password: (set during registration)
          </p>
        </div>
      </div>
    </div>
  );
}
