'use client';

import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { API_BASE } from '@/lib/config';
import Link from 'next/link';

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    console.log('API_BASE:', API_BASE);
    console.log('Attempting register with username:', username);

    try {
      if (!API_BASE) {
        setError('Server URL not configured. Set NEXT_PUBLIC_API_BASE_URL in .env.local');
        setLoading(false);
        return;
      }
      const res = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      console.log('Response status:', res.status);
      const data = await res.json();
      console.log('Response data:', data);

      if (!res.ok) {
        setError(data.message || 'Registration failed');
        setLoading(false);
        return;
      }

      router.push('/login');
    } catch (e) {
      console.error('Registration error:', e);
      setError('Network error. Please try again.');
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background like app root: animated gradient + floating blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3C5B7C] to-blue-900 animate-gradient z-0"></div>
      <div className="absolute rounded-full bg-white/10 w-40 h-40 top-10 left-10 z-0 blob-a" />
      <div className="absolute rounded-full bg-blue-500/20 w-48 h-48 bottom-20 right-20 z-0 blob-b" />
      <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none z-0"></div>

      <div className="w-full max-w-md z-10">
        <div className="bg-white rounded-lg shadow-sm border border-blue-300 p-8 animate-fadeInUp">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Create Account</h1>
          <p className="text-slate-500 text-sm mb-8">Sign up to get started</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-md mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-slate-700 mb-2">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="choose a username"
                className="w-full"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full"
                required
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-2">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full"
                required
                disabled={loading}
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-emerald-500 text-white hover:from-indigo-700 hover:to-emerald-600 transform transition hover:scale-105" disabled={loading}>
              {loading ? 'Creating account...' : 'Sign up'}
            </Button>
          </form>

          <p className="text-center text-sm text-slate-600 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}