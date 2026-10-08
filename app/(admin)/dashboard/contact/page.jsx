"use client";

import { useState, useEffect } from "react";
import { contactAPI } from "@/lib/api";
import Link from "next/link";

export default function ContactPage() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const response = await contactAPI.getAll({ skip: 0, take: 20 });
      setMessages(response.messages);
    } catch (error) {
      alert("Failed to load messages: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      await contactAPI.delete(id);
      loadMessages();
    } catch (error) {
      alert("Failed to delete message: " + error.message);
    }
  };

  const handleMarkAsRead = async (id) => {
    try {
      await contactAPI.markAsRead(id);
      loadMessages();
    } catch (error) {
      alert("Failed to mark as read: " + error.message);
    }
  };

  const viewMessage = async (id) => {
    try {
      const message = await contactAPI.getById(id);
      setSelectedMessage(message);
      setShowDetail(true);
    } catch (error) {
      alert("Failed to load message: " + error.message);
    }
  };

  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-gray-800'>Contact Messages</h1>
        <button
          onClick={loadMessages}
          className='bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded'
        >
          Refresh
        </button>
      </div>

      {loading ? (
        <div className='text-center py-8'>Loading...</div>
      ) : messages.length === 0 ? (
        <div className='bg-white rounded-lg shadow p-8 text-center'>
          <p className='text-gray-600'>No messages yet</p>
        </div>
      ) : (
        <div className='bg-white rounded-lg shadow overflow-x-auto'>
          <table className='w-full'>
            <thead className='bg-gray-100 border-b'>
              <tr>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  From
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  Email
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  Subject
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  Status
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  Date
                </th>
                <th className='px-6 py-3 text-left font-semibold text-gray-700'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr
                  key={message.id}
                  className={`border-b hover:bg-gray-50 ${!message.read ? "bg-blue-50" : ""}`}
                >
                  <td className='px-6 py-4 text-gray-800 font-semibold'>
                    {message.name}
                  </td>
                  <td className='px-6 py-4 text-gray-600'>{message.email}</td>
                  <td className='px-6 py-4 text-gray-600'>{message.subject}</td>
                  <td className='px-6 py-4'>
                    <span
                      className={`px-3 py-1 rounded text-sm font-semibold ${
                        message.read
                          ? "bg-gray-100 text-gray-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {message.read ? "Read" : "Unread"}
                    </span>
                  </td>
                  <td className='px-6 py-4 text-gray-600 text-sm'>
                    {new Date(message.createdAt).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 space-x-2'>
                    <button
                      onClick={() => viewMessage(message.id)}
                      className='text-blue-600 hover:underline text-sm'
                    >
                      View
                    </button>
                    {!message.read && (
                      <button
                        onClick={() => handleMarkAsRead(message.id)}
                        className='text-green-600 hover:underline text-sm'
                      >
                        Mark Read
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(message.id)}
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
      )}

      {/* Message Detail Modal */}
      {showDetail && selectedMessage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-96 overflow-y-auto'>
            <div className='p-6 space-y-4'>
              <div className='flex justify-between items-start'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  {selectedMessage.subject}
                </h2>
                <button
                  onClick={() => setShowDetail(false)}
                  className='text-gray-500 hover:text-gray-700 text-2xl'
                >
                  ×
                </button>
              </div>

              <div className='grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded'>
                <div>
                  <p className='text-gray-600 text-sm'>From</p>
                  <p className='font-semibold text-gray-800'>
                    {selectedMessage.name}
                  </p>
                </div>
                <div>
                  <p className='text-gray-600 text-sm'>Email</p>
                  <p className='font-semibold text-gray-800'>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className='text-blue-600 hover:underline'
                    >
                      {selectedMessage.email}
                    </a>
                  </p>
                </div>
                {selectedMessage.phone && (
                  <div>
                    <p className='text-gray-600 text-sm'>Phone</p>
                    <p className='font-semibold text-gray-800'>
                      {selectedMessage.phone}
                    </p>
                  </div>
                )}
                <div>
                  <p className='text-gray-600 text-sm'>Date</p>
                  <p className='font-semibold text-gray-800'>
                    {new Date(selectedMessage.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div>
                <p className='text-gray-600 text-sm mb-2'>Message</p>
                <p className='text-gray-800 whitespace-pre-wrap'>
                  {selectedMessage.message}
                </p>
              </div>

              <div className='flex space-x-4 pt-4 border-t'>
                <button
                  onClick={() => setShowDetail(false)}
                  className='bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded'
                >
                  Close
                </button>
                {!selectedMessage.read && (
                  <button
                    onClick={() => {
                      handleMarkAsRead(selectedMessage.id);
                      setShowDetail(false);
                    }}
                    className='bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded'
                  >
                    Mark as Read
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
