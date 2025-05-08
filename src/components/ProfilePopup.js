<<<<<<< HEAD
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProfilePopup({ user, onClose, onLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/profile');
    onClose();
  };

=======
import Image from 'next/image';

export default function ProfilePopup() {
>>>>>>> f65ae7cb2b3b00917723eb89c06f45612dfdf1db
  return (
    <div className="absolute bottom-20 left-4 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
      <div className="relative">
        {/* Background Image */}
        <div className="h-24 rounded-t-lg overflow-hidden">
          <Image
            src="/images/farm-background.jpg"
            alt="Background"
            width={300}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Image */}
        <div className="absolute left-4 -bottom-12">
          <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden">
<<<<<<< HEAD
            {user?.profileImage ? (
              <Image
                src={user.profileImage}
                alt={user.name}
                width={96}
                height={96}
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <i className="fas fa-user text-gray-400 text-4xl"></i>
              </div>
            )}
=======
            <Image
              src="/images/nazlan.png"
              alt="Profile"
              width={96}
              height={96}
              className="object-cover"
            />
>>>>>>> f65ae7cb2b3b00917723eb89c06f45612dfdf1db
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-14 mb-4">
<<<<<<< HEAD
        <h3 className="text-xl font-bold text-gray-800">{user?.name || 'User'}</h3>
        <p className="text-sm text-gray-600">{user?.position || 'Position'}</p>
        <p className="text-sm text-gray-500">{user?.address || 'Location'}</p>
=======
        <h3 className="text-xl font-bold text-gray-800">Muhammad Nazlan Rizqon</h3>
        <p className="text-sm text-gray-600">Sumber Jaya's Owner</p>
        <p className="text-sm text-gray-500">Bandung, Indonesia</p>
>>>>>>> f65ae7cb2b3b00917723eb89c06f45612dfdf1db
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-4">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">24</p>
          <p className="text-xs text-gray-600">Fields</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">142</p>
          <p className="text-xs text-gray-600">Tasks</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">8</p>
          <p className="text-xs text-gray-600">Workers</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-gray-200">
<<<<<<< HEAD
        <Link 
          href="/profile"
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          <i className="fas fa-user-edit mr-2"></i>
          Edit Profile
        </Link>
        <Link 
          href="/settings"
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
          onClick={onClose}
        >
          <i className="fas fa-cog mr-2"></i>
          Settings
        </Link>
        <button 
          onClick={onLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md"
        >
=======
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
          <i className="fas fa-user-edit mr-2"></i>
          Edit Profile
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
          <i className="fas fa-cog mr-2"></i>
          Settings
        </button>
        <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 rounded-md">
>>>>>>> f65ae7cb2b3b00917723eb89c06f45612dfdf1db
          <i className="fas fa-sign-out-alt mr-2"></i>
          Logout
        </button>
      </div>
    </div>
  );
} 