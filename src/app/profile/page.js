'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        } else {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/auth/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  if (loading) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-6"></div>
          <div className="space-y-6">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Split name into first and last name
  const [firstName, lastName] = (user.name || '').split(' ');

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm mb-6 relative overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-green-400 to-green-600"></div>
        <div className="p-6 flex items-start -mt-16">
          <div className="w-32 h-32 bg-yellow-300 rounded-full overflow-hidden border-4 border-white shadow-lg">
            {user.profileImage ? (
              <Image
                src={user.profileImage}
                alt={user.name}
                width={128}
                height={128}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <i className="fas fa-user text-gray-400 text-4xl"></i>
              </div>
            )}
          </div>
          <div className="ml-6 mt-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
              <span className="ml-4 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {user.role || 'User'}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{user.address || 'Location not set'}</p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
          </div>
          <button className="flex items-center text-sm text-green-600 hover:text-green-700">
            <i className="fas fa-edit mr-1"></i>
            Edit
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm text-gray-500 mb-1">First name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={firstName || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Last name</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={lastName || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email address</label>
              <input
                type="email"
                className="w-full p-2 border rounded-md"
                value={user.email || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone</label>
              <input
                type="tel"
                className="w-full p-2 border rounded-md"
                value={user.phone || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Role</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={user.role || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Address */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Address</h2>
          </div>
          <button className="flex items-center text-sm text-green-600 hover:text-green-700">
            <i className="fas fa-edit mr-1"></i>
            Edit
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-500 mb-1">Street address</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={user.address || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={user.city || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Country</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={user.country || ''}
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Postal Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                value={user.postalCode || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 