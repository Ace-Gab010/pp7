'use client';

import { getToken } from '@/lib/auth';
import { jwtDecode } from 'jwt-decode';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface JwtPayload {
  sub: number;
  username: string;
  role: string;
  exp: number;
  iat: number;
}

export default function DashboardHome() {
  const router = useRouter();
  const token = getToken();
  const [showToken, setShowToken] = useState(false);
  let username = 'Guest';
  let userId = '';

  if (token) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      username = decoded.username || 'Guest';
      userId = decoded.sub.toString();
    } catch (e) {
      console.error('Token decoding failed:', e);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    router.push('/login');
  }

  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient z-0"></div>
      <div className="absolute rounded-full bg-white/10 w-48 h-48 top-1/3 left-10 z-0 blob-a" />
      <div className="absolute rounded-full bg-blue-500/20 w-60 h-60 bottom-1/4 right-10 z-0 blob-b" />
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>

      <div className="max-w-2xl mx-auto z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fadeInUp">
          <div>
            <h1 className="text-4xl font-bold mb-1 gradient-text">Welcome back</h1>
            <p className="text-xl text-slate-600">{username}</p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-lg shadow-sm border border-blue-300 p-8 mb-6 animate-fadeInUp">
          <div className="space-y-6">
            {/* User Info */}
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                Account Info
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Username</p>
                  <p className="text-lg font-medium text-slate-900">{username}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">User ID</p>
                  <p className="text-lg font-medium text-slate-900 font-mono">{userId}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-blue-200" />

            {/* Token Section */}
            {token && (
              <div>
                <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                  Authentication
                </h2>
                <Button
                  onClick={() => setShowToken(!showToken)}
                  variant="outline"
                  className="mb-4 text-sm border-blue-300 text-blue-700 hover:bg-blue-50"
                >
                  {showToken ? 'Hide Token' : 'Show Token'}
                </Button>
                {showToken && (
                  <div className="bg-slate-900 rounded-md p-4 animate-floatY border border-blue-400">
                    <p className="text-slate-400 text-xs font-mono break-all font-semibold">
                      {token}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="/profile"
            className="bg-white rounded-lg shadow-sm border border-blue-300 p-6 hover:shadow-md hover:border-blue-400 transition-all"
          >
            <h3 className="font-semibold text-slate-900 mb-1">Profile</h3>
            <p className="text-sm text-slate-600">View and edit your profile</p>
          </a>
          <a
            href="/settings"
            className="bg-white rounded-lg shadow-sm border border-blue-300 p-6 hover:shadow-md hover:border-blue-400 transition-all"
          >
            <h3 className="font-semibold text-slate-900 mb-1">Settings</h3>
            <p className="text-sm text-slate-600">Manage your account settings</p>
          </a>
        </div>
      </div>
    </div>
  );
}