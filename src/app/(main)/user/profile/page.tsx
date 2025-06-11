import React from "react";
import Image from "next/image";

export default function ProfilePage() {
  // Mock user data - replace with actual data fetching
  const user = {
    id: "clx123abc456",
    name: "John Doe",
    email: "john.doe@example.com",
    emailVerified: new Date("2024-01-15"),
    image: "/placeholder-avatar.jpg",
  };

  return (
    <section className="max-w-2xl mx-auto py-24">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative">
            <Image
              src={user.image || "/default-avatar.png"}
              alt="Profile"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-600">{user.email}</p>
            {user.emailVerified && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-2">
                ✓ Email Verified
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                value={user.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                value={user.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                readOnly
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <input
                type="text"
                value={user.id}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Verified
              </label>
              <input
                type="text"
                value={
                  user.emailVerified
                    ? user.emailVerified.toLocaleDateString()
                    : "Not verified"
                }
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Edit Profile
          </button>
          <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            Change Password
          </button>
        </div>
      </div>
    </section>
  );
}
